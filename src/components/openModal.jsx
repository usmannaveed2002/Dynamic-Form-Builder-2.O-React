import CheckboxInputModal from "./checkboxInputModal";
import DateInputModal from "./dateInputModal";
import FileInputModal from "./fileInputModal";
import LabelModal from "./labelModal";
import RadioInputModal from "./radioInputModal";
import SelectInputModal from "./selectInputModal";
import TextareaModal from "./textareaModal";
import TextInputModal from "./textInputModal";

import { useForm } from "../context/FormContext";
import FormNameModal from "./formNameModal";
import { useEffect, useState } from "react";

function OpenModal({ whichField, setWhichField }) {
  const { selectedFieldId, updatedField, deleteField, formName, fields } =
    useForm();

  return (
    whichField && (
      <div className="fixed inset-0 bg-gray-500/50 flex items-start justify-center overflow-y-auto p-50">
        <div className="bg-white min-h-40 w-150 rounded-lg">
          <FormNameModal />
          <span className="text-sm font-medium text-gray-500 mx-5">
            Attributes: Field {fields.length}
          </span>
          {whichField === "Label" ? <LabelModal /> : ""}
          {whichField === "Text Input" ? <TextInputModal /> : ""}
          {whichField === "Textarea" ? <TextareaModal /> : ""}
          {whichField === "Date" ? <DateInputModal /> : ""}
          {whichField === "File" ? <FileInputModal /> : ""}
          {whichField === "Radio" ? <RadioInputModal /> : ""}
          {whichField === "Checkbox" ? <CheckboxInputModal /> : ""}
          {whichField === "Select" ? <SelectInputModal /> : ""}

          <div className="flex items-center justify-between px-9 mt-5 mb-5">
            <button
              className="text-gray-500 px-4 bg-white py-1 rounded-full cursor-pointer hover:text-white hover:bg-gray-500"
              onClick={() => {
                setWhichField("");
                deleteField(selectedFieldId);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-gray-500 px-4 text-white py-1 rounded-full cursor-pointer hover:text-gray-500 hover:bg-white"
              onClick={() => setWhichField("")}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default OpenModal;
