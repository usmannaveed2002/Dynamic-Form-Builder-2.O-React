import { useState } from "react";
import { useForm } from "../context/FormContext";

function Sidebar({ setWhichField }) {
  const { addField, formName, fields } = useForm();

  return (
    <div className="bg-gray-600 h-screen w-130 pt-25">
      <div className="flex flex-col bg-gray-900 text-white text-lg font-medium m-5 rounded-lg p-5">
        <h1>Click to add the field.</h1>
        <div className="flex flex-col gap-3 mt-5">
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("label");
            }}
          >
            Label
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("text");
            }}
          >
            Text Input
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("textarea");
            }}
          >
            Textarea
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("select");
            }}
          >
            Select
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("date");
            }}
          >
            Date
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("checkbox");
            }}
          >
            Checkbox
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("radio");
            }}
          >
            Radio
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300"
            onClick={(e) => {
              setWhichField(e.target.textContent);
              addField("file");
            }}
          >
            File
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
