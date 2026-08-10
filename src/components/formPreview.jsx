import { useState } from "react";

function FormPreview() {
  return (
    <div className="bg-gray-300 py-25 px-10 w-full">
      <div className="bg-white min-h-full w-full rounded-lg py-5">
        {/* Label */}
        <label htmlFor="" className="mb-2 px-7 text-gray-500 mx-1 my-2">
          Label
        </label>

        {/* Text */}
        <div className="mb-2 px-7 flex flex-col">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <input
            type="text"
            placeholder="Placeholder"
            className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Textarea */}
        <div className="mb-2 px-7 flex flex-col">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <textarea
            placeholder="Placeholder"
            className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          ></textarea>
        </div>

        {/* Select */}
        <div className="mb-2 px-7 flex flex-col">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <select className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none"></select>
        </div>

        {/* Date */}
        <div className="mb-2 px-7 flex flex-col">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <input
            type="date"
            placeholder="Placeholder"
            className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </div>

        {/* File */}
        <div className="mb-2 px-7 flex flex-col">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <input
            type="file"
            placeholder="Placeholder"
            className="text-gray-600 w-170 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Checkbox */}
        <div className="mb-2 px-8 flex items-center gap-2">
          <input
            type="checkbox"
            placeholder="Placeholder"
            className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
        </div>

        {/* Radio Field */}
        <div className="mb-2 px-7 flex flex-col justify-center">
          <label htmlFor="" className="text-gray-500 mx-1 my-2">
            Label
          </label>
          <div className="flex px-1 items-center gap-2">
            <input
              type="radio"
              name=""
              placeholder="Placeholder"
              className="text-gray-600 w-4 h-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
            <label htmlFor="" className="text-gray-500 mx-1 my-2">
              Label
            </label>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default FormPreview;
