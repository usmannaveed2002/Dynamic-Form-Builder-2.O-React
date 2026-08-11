import { useForm } from "../context/FormContext";

function LabelModal() {
  const { updateField, selectedFieldId } = useForm();
  return (
    <div className="mt-2 p-2">
      <input
        type="text"
        placeholder="Enter Label"
        className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
        onChange={(e) =>
          updateField(selectedFieldId, { label: e.target.value })
        }
      ></input>
    </div>
  );
}

export default LabelModal;
