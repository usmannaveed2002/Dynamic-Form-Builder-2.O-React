import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

function GenerateForm() {
  const [form, setForm] = useState([]);
  let { formId } = useParams();
  const formRef = useRef(null);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let savedForms = localStorage.getItem("forms");
    let forms = savedForms ? JSON.parse(savedForms) : [];
    let currentForm = forms.find((form) => form.id === formId);
    setForm(currentForm);
  }, [formId]);

  function handleFormClear() {
    formRef.current.reset();
  }

  function saveNewResponse() {
    let newResponse = {
      id: Date.now(),
      formName: form.name,
      formId: formId,
      response,
    };
    let savedResponses = localStorage.getItem("responses");
    let responses = savedResponses ? JSON.parse(savedResponses) : [];
    let updatedResponses = [...responses, newResponse];
    localStorage.setItem("responses", JSON.stringify(updatedResponses));
    navigate(`/view-responses/${newResponse.id}`);
  }

  return (
    <div className="bg-gray-300 h-screen py-25 px-10 w-full flex items-center justify-center">
      <div className="bg-white w-185 rounded-lg py-2">
        <legend className="flex items-center justify-center text-2xl text-gray-600 font-medium">
          {form.name}
        </legend>
        <form methed="POST" ref={formRef}>
          {form.fields?.map((field) => {
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
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
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
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
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
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
                >
                  <option>Select {field.label}</option>
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
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
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
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
                />
              </div>
            ) : field.type === "checkbox" ? (
              <div key={field.id} className="mb-2 px-8 flex items-center gap-2">
                <input
                  name={field.label || field.placeholder}
                  type="checkbox"
                  className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                  required={field.required}
                  onChange={(e) => {
                    setResponse((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }));
                  }}
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
                    className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    onChange={(e) => {
                      setResponse((prev) => ({
                        ...prev,
                        [field.id]: e.target.value,
                      }));
                    }}
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

          <div className="flex items-center justify-between w-170 mx-7 my-5 p-3">
            <button
              className="bg-green-700 py-1 px-3 rounded-sm cursor-pointer text-white hover:bg-green-800"
              onClick={(e) => {
                e.preventDefault();
                saveNewResponse();
              }}
            >
              Submit Form
            </button>
            <button
              className="bg-red-700 py-1 px-3 rounded-sm cursor-pointer text-white hover:bg-red-800"
              onClick={handleFormClear}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GenerateForm;
