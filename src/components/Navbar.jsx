function Navbar() {
  return (
    <nav className="bg-gray-500 fixed w-full h-15 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-evenly">
        <span className="bg-gray-500 rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer">
          Create Form
        </span>
        <span className="bg-gray-500 rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer">
          Fill Form
        </span>
        <span className="bg-gray-500 rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer">
          View Forms
        </span>
        <span className="bg-gray-500 rounded-md text-white py-1 px-2 text-lg hover:bg-gray-700 hover:cursor-pointer">
          View Responses
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
