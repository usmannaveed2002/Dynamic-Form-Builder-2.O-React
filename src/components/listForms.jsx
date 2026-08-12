import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListForms() {
  const [forms, setForms] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let savedForms = localStorage.getItem("forms");
    let allForms = savedForms ? JSON.parse(savedForms) : [];
    setForms(allForms);
  }, []);

  return (
    <div className="bg-gray-600 h-screen w-screen flex items-center justify-center">
      <div className="bg-white h-[70vh] w-[70vw] rounded-lg">
        <span className="flex items-center justify-center text-xl font-medium text-gray-600 my-3">
          Available Forms
        </span>
        {forms.map((form, index) => {
          return (
            <div className="bg-gray-100 p-3 mb-2" key={form.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start w-full pl-5 text-gray-500 font-medium">
                  <span className="border-r-2 pr-2">{index + 1}</span>
                  <span className="border-r-2 px-2 w-125 truncate">
                    {form.name}
                  </span>
                  <span className="px-2 w-85 truncate">{form.id}</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    className="bg-green-700 text-white font-medium py-1 px-2 rounded-md cursor-pointer hover:bg-green-800"
                    onClick={(e) => {
                      navigate(`/fill-form/${form.id}`);
                    }}
                  >
                    Use
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListForms;
