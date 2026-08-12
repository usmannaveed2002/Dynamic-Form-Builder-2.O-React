import { useForm } from "../context/FormContext";

function FormNameModal() {
  const { setFormName, formName } = useForm();
  return (
    <div className="mt-2 p-2">
      <input
        type="text"
        value={formName}
        placeholder="Enter Form Name"
        className="w-143 border border-gray-300 rounded-md m-2 px-3 py-2 focus:outline-none"
        onChange={(e) => setFormName(e.target.value)}
      ></input>
    </div>
  );
}

export default FormNameModal;
