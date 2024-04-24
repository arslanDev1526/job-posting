import Logo from '../../assets/images/logoo.png';


const NavItem = (props) => {

    const{ toggle, buttonRef } = props

  return (
    <>
    <div className="flex justify-between px-5 py-1 bg-gradient-to-r from-teal-500 to-indigo-800">
      <div className="flex items-center gap-3">
        <div>
          <img className="w-14 h-16" src={Logo} alt="" />
        </div>
        <h1>
          <span className="text-white font-semibold text-xl">Pixel</span>
          <span className="text-white text-xl">Pulse</span>
        </h1>
      </div>

      <div className="flex items-center gap-3 relative">
        <h2 className="text-white text-lg sm:block hidden">david cornay</h2>
        <div
          ref={buttonRef}
          onClick={toggle}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
        >
          <img
            className="h-10 w-10 rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocI6izRc1Hv_yEUbMuiHZA6z7s8kowcZLNbNY63BPyoXNp4jLQ=s96-c"
            alt="userLogo"
          />
        </div>
      </div>
    </div>

  </>
  )
}

export default NavItem