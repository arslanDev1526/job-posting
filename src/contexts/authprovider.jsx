import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/client";
import Loader from "../components/loader";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { 
      return {error: error.message}
    }
    return { user: data.user, session: data.session };
  } catch (error) {
    console.error("Login error:", error);
    return { error: error.message };
  }
}

const signOut = () => supabase.auth.signOut();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [id, setId] = useState(null);
  console.log(id,"iddd")

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
        return;
      }
      if (session) {
        const { data, error } = await supabase.auth.getUser();
        console.log("user data", data);

        if (error) {
          console.error("Error fetching user:", error);
          setUser(null);
          setAuth(false);
          setRole(null);
          setId(null);
        } else {
          setUser(data.user);
          setAuth(!!data.user);
          setRole(data.user.user_metadata.role);
          setId(data.user.id);

        }
      }
      setLoading(false);
    };

    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
        setRole(session.user.user_metadata.role);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
        setRole(null);
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ user, login, signOut, auth, role, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
