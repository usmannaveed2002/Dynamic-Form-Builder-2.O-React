import { createContext, useContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [fields, setFields] = useState([]);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [formName, setFormName] = useState("");

  function addField(type) {
    let newField = {
      id: crypto.randomUUID(),
      type: type,
    };

    setFields((prev) => [...prev, newField]);
    setSelectedFieldId(newField.id);
  }

  function updateField(fieldId, updates) {
    setFields((prev) =>
      prev.map((field) =>
        field.id === fieldId ? { ...field, ...updates } : field,
      ),
    );
  }

  function deleteField(fieldId) {
    setFields((prev) => prev.filter((field) => field.id !== fieldId));
  }

  return (
    <FormContext.Provider
      value={{
        fields,
        setFields,
        selectedFieldId,
        addField,
        updateField,
        deleteField,
        setSelectedFieldId,
        formName,
        setFormName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  return useContext(FormContext);
}

export default FormProvider;
export { useForm };
