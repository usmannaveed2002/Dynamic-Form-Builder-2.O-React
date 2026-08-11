import { useState } from "react";
import { useForm } from "../context/FormContext";

function FormPreview() {
  const { fields } = useForm();

  return (
    <div className="bg-gray-300 py-25 px-10 w-full">
      <div className="bg-white min-h-full w-full rounded-lg py-2">
        <legend className="flex items-center justify-center text-2xl text-gray-600 font-medium">
          My Dynamic Form
        </legend>
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
                className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none"
                required={field.required}
              >
                {field.options?.map((option) => {
                  return <option value={option.toLowerCase()}>{option}</option>;
                })}
              </select>
            </div>
          ) : field.type === "date" ? (
            <div key={field.id} className="mb-2 px-7 flex flex-col">
              <label htmlFor="" className="text-gray-500 mx-1 my-2">
                {field.label}
              </label>
              <input
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
                  type="radio"
                  name={field.name}
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
      </div>
    </div>
  );
}

export default FormPreview;
