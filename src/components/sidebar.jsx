function Sidebar({ whichField, setWhichField }) {
  function handleMenuClick(e) {
    setWhichField(e.target.textContent);
  }
  return (
    <>
      <div className="bg-gray-200 h-screen w-130 pt-25">
        <div className="flex flex-col bg-gray-300 m-5 rounded-lg p-3">
          <h1>Click to add the field.</h1>
          <div className="flex flex-col gap-3 mt-5">
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Label
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Text Input
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Textarea
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Select
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Date
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Checkbox
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              Radio
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => handleMenuClick(e)}
            >
              File
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
