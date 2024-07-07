import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/client";
import Loader from "../components/loader";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

 const handleLogout = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      window.location.reload();
    }
  };

// const signOut = () => supabase.auth.signOut();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        setUser(null);
        setAuth(false);
      } else {
        setUser(data.user);
        setAuth(!!data.user);
        //!! used to convert a value to a boolean
      }
      setLoading(false);
    };

    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loader/>; // Render a loading state while checking session
  }

  return (
    <AuthContext.Provider value={{ user, login, signOut:handleLogout, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
