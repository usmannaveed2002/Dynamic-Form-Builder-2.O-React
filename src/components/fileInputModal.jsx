import { useForm } from "../context/FormContext";

function FileInputModal() {
  const { selectedFieldId, updatedField } = useForm();
  return (
    <div className="mt-2 p-2">
      <input
        type="text"
        placeholder="Enter Label"
        className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
        onChange={(e) =>
          updatedField(selectedFieldId, { label: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Enter Placeholder"
        className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
        onChange={(e) =>
          updatedField(selectedFieldId, { placeholder: e.target.value })
        }
      ></input>
      <div className="w-143 ml-2 flex flex-col mt-2 gap-2">
        <label className="text-gray-500">Allowed File Types</label>
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none text-gray-500"
          onChange={(e) =>
            updatedField(selectedFieldId, { accept: e.target.value })
          }
        >
          <option value={""}>All Allowed</option>
          <option value={"[0-9]+"}>Images Only</option>
          <option value={"[A-Za-z ]+"}>Videos Only</option>
          <option value={"[A-Za-z0-9 ]+"}>Audio Only</option>
          <option value={"[A-Za-z0-9 ]+"}>Documents Only</option>
        </select>
      </div>
      <div className="mt-5 ml-3 flex items-center justify-start">
        <input
          type="checkbox"
          className="h-4 w-4 mr-3 hover:cursor-pointer"
          onChange={(e) =>
            updatedField(selectedFieldId, { required: e.target.checked })
          }
        />
        <label className="text-gray-500">Required?</label>
      </div>
    </div>
  );
}

export default FileInputModal;
