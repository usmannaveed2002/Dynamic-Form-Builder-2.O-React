import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponseModal from "./responseModal";

function ListResponses() {
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [openResponse, setOpenResponse] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let savedResponses = localStorage.getItem("responses");
    let allResponses = savedResponses ? JSON.parse(savedResponses) : [];
    setResponses(allResponses);
  }, []);

  return (
    <div className="bg-gray-600 h-screen w-screen flex items-center justify-center">
      <div className="bg-white h-[70vh] w-[70vw] rounded-lg overflow-y-auto">
        <span className="flex items-center justify-center text-xl font-medium text-gray-600 my-3">
          Saved Responses
        </span>
        {responses.map((response, index) => {
          return (
            <div className="bg-gray-100 p-3 mb-2" key={response.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start w-full pl-5 text-gray-500 font-medium">
                  <span className="border-r-2 pr-2">{index + 1}</span>
                  <span className="border-r-2 px-2 w-125 truncate">
                    Used ➡️ {response.formName}
                  </span>
                  <span className="px-2 w-85 truncate">{response.id}</span>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    className="bg-yellow-500 text-white font-medium py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-600"
                    onClick={(e) => {
                      setCurrentResponse(response);
                      setOpenResponse(true);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {openResponse && (
          <ResponseModal
            response={currentResponse}
            setOpenResponse={setOpenResponse}
          />
        )}
      </div>
    </div>
  );
}

export default ListResponses;
