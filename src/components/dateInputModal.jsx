function DateInputModal() {
  return (
    <div className="mt-2 p-2">
      <input
        type="text"
        placeholder="Enter Label"
        className="text-gray-600 w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
      ></input>
      <input
        type="text"
        placeholder="Enter Placeholder"
        className="text-gray-600 w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
      ></input>
      <label className="text-gray-500 px-3">Minimum Date</label>
      <input
        type="date"
        className="text-gray-600 w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
      ></input>
      <label className="text-gray-500 px-3">Maximum Date</label>
      <input
        type="date"
        className="text-gray-600 w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
      ></input>
      <div className="mt-5 ml-3 flex items-center justify-start">
        <input type="checkbox" className="h-4 w-4 mr-3 hover:cursor-pointer" />
        <label className="text-gray-500">Required?</label>
      </div>
    </div>
  );
}

export default DateInputModal;
