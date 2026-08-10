function Sidebar({ setWhichField, setFields }) {
  return (
    <>
      <div className="bg-gray-200 h-screen w-130 pt-25">
        <div className="flex flex-col bg-gray-300 m-5 rounded-lg p-3">
          <h1>Click to add the field.</h1>
          <div className="flex flex-col gap-3 mt-5">
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "label",
                  },
                ]);
              }}
            >
              Label
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "text",
                  },
                ]);
              }}
            >
              Text Input
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "textarea",
                  },
                ]);
              }}
            >
              Textarea
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "select",
                  },
                ]);
              }}
            >
              Select
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "date",
                  },
                ]);
              }}
            >
              Date
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "checkbox",
                  },
                ]);
              }}
            >
              Checkbox
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "radio",
                  },
                ]);
              }}
            >
              Radio
            </span>
            <span
              className="cursor-pointer hover:text-blue-800"
              onClick={(e) => {
                setWhichField(e.target.textContent);
                setFields((prev) => [
                  ...prev,
                  {
                    id: crypto.randomUUID(),
                    type: "file",
                  },
                ]);
              }}
            >
              File
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
