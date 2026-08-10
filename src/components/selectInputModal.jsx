import { useState } from "react";

function SelectInputModal() {
  const [options, setOptions] = useState([]);
  console.log(options);

  function handleAddOption() {}

  return (
    <div className="mt-2 p-2">
      <input
        type="text"
        placeholder="Enter Label"
        className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
      ></input>

      {options.map((option, index) => (
        <input
          key={index}
          value={option}
          type="text"
          placeholder="Enter Option"
          className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
          onChange={(e) => {
            let updated = [...options];
            updated[index] = e.target.value;
            setOptions(updated);
          }}
        />
      ))}
      <button
        type="button"
        className="text-gray-500 m-2 px-3 hover:bg-gray-600 hover:text-white py-1 rounded-md cursor-pointer"
        onClick={() => setOptions((prev) => [...prev, ""])}
      >
        Add Option {options.length + 1}
      </button>
      <div className="mt-5 ml-3 flex items-center justify-start">
        <input type="checkbox" className="h-4 w-4 mr-3 hover:cursor-pointer" />
        <label className="text-gray-500">Required?</label>
      </div>
    </div>
  );
}

export default SelectInputModal;
