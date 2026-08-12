import { useState } from "react";
import { useForm } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

function FormPreview() {
  const { fields, setFields, formName } = useForm();
  const navigate = useNavigate();

  function saveNewForm() {
    let newForm = {
      id: crypto.randomUUID(),
      name: formName,
      fields,
    };
    let savedForms = localStorage.getItem("forms");
    let forms = savedForms ? JSON.parse(savedForms) : [];
    let updatedForms = [...forms, newForm];
    localStorage.setItem("forms", JSON.stringify(updatedForms));
    navigate(`/fill-form/${newForm.id}`);
  }

  return (
    <div className="bg-gray-600 py-25 px-10 w-full">
      <div className="bg-white min-h-full w-250 rounded-lg py-2">
        <legend className="flex items-center justify-center text-2xl text-gray-600 font-medium">
          {formName}
        </legend>
        <form methed="POST">
          {fields.map((field) => {
            return field.type === "label" ? (
              <label
                key={field.id}
                htmlFor=""
                className="flex mb-2 px-7 text-gray-500 mx-1 my-2"
              >
                {field.label}
              </label>
            ) : field.type === "text" ? (
              <div key={field.id} className="mb-2 px-7 flex flex-col">
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
                <input
                  name={field.label || field.placeholder}
                  type="text"
                  placeholder={field.placeholder}
                  className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  required={field.required}
                  pattern={field.pattern}
                />
              </div>
            ) : field.type === "textarea" ? (
              <div key={field.id} className="mb-2 px-7 flex flex-col">
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
                <textarea
                  name={field.label || field.placeholder}
                  placeholder={field.placeholder}
                  className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  required={field.required}
                ></textarea>
              </div>
            ) : field.type === "select" ? (
              <div key={field.id} className="mb-2 px-7 flex flex-col">
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
                <select
                  name={field.label || field.placeholder}
                  className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none"
                  required={field.required}
                >
                  {field.options?.map((option) => {
                    return (
                      <option value={option.toLowerCase()}>{option}</option>
                    );
                  })}
                </select>
              </div>
            ) : field.type === "date" ? (
              <div key={field.id} className="mb-2 px-7 flex flex-col">
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
                <input
                  name={field.label || field.placeholder}
                  type="date"
                  placeholder={field.placeholder}
                  className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  required={field.required}
                  min={field.min}
                  max={field.max}
                />
              </div>
            ) : field.type === "file" ? (
              <div key={field.id} className="mb-2 px-7 flex flex-col">
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
                <input
                  name={field.label || field.placeholder}
                  type="file"
                  placeholder={field.placeholder}
                  className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  accept={field.accept}
                  required={field.required}
                />
              </div>
            ) : field.type === "checkbox" ? (
              <div key={field.id} className="mb-2 px-8 flex items-center gap-2">
                <input
                  name={field.label || field.placeholder}
                  type="checkbox"
                  className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  required={field.required}
                />
                <label htmlFor="" className="text-gray-500 mx-1 my-2">
                  {field.label}
                </label>
              </div>
            ) : field.type === "radio" ? (
              <div
                key={field.id}
                className="mb-2 px-7 flex flex-col justify-center"
              >
                <div key={field.id} className="flex px-1 items-center gap-2">
                  <input
                    name={field.label || field.placeholder}
                    type="radio"
                    name={field.name}
                    required={field.required}
                    className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  />
                  <label htmlFor="" className="text-gray-500 mx-1 my-2">
                    {field.label}
                  </label>
                </div>
              </div>
            ) : (
              ""
            );
          })}

          {fields.length > 0 && (
            <div className="flex items-center justify-between w-170 mx-7 my-5 p-3">
              <button
                className="bg-green-700 py-1 px-3 rounded-sm cursor-pointer text-white hover:bg-green-800"
                onClick={(e) => {
                  e.preventDefault();
                  saveNewForm();
                }}
              >
                Save Form
              </button>
              <button
                className="bg-red-700 py-1 px-3 rounded-sm cursor-pointer text-white hover:bg-red-800"
                onClick={(e) => setFields([])}
              >
                Reset Form
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormPreview;
