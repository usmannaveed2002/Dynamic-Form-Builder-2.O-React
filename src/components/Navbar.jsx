import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-500 fixed w-full h-15 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-evenly">
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={`rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer ${isActive ? "border-b border-gray-300" : "bg-gray-500"}`}
            >
              Create Form
            </span>
          )}
        </NavLink>
        <NavLink to="/fill-form">
          {({ isActive }) => (
            <span
              className={`rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer ${isActive ? "border-b border-gray-300" : "bg-gray-500"}`}
            >
              Fill Form
            </span>
          )}
        </NavLink>
        <NavLink to="/view-forms">
          {({ isActive }) => (
            <span
              className={`rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer ${isActive ? "border-b border-gray-300" : "bg-gray-500"}`}
            >
              View Forms
            </span>
          )}
        </NavLink>
        <NavLink to="/view-responses">
          {({ isActive }) => (
            <span
              className={`rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer ${isActive ? "border-b border-gray-300" : "bg-gray-500"}`}
            >
              View Responses
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
