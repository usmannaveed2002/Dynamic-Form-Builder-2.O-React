function ResponseModal({ response, setOpenResponse }) {
  let forms = JSON.parse(localStorage.getItem("forms")) || [];
  let form = forms.find((form) => form.id === response.formId);
  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-start justify-center overflow-y-auto p-35">
      <div className="bg-white w-150 rounded-lg">
        {form.fields.map((field, index) => {
          return (
            <div className="bg-gray-100 p-3 mb-2" key={field.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start w-full pl-5 text-gray-500 font-medium">
                  <span className="border-r-2 pr-2">{index + 1}</span>
                  <span className="border-r-2 px-2 w-70 truncate">
                    {field.label}
                  </span>
                  <span className="px-2 w-85 truncate">
                    {response.response[field.id] ||
                      response.response[field.name]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex m-5 items-center justify-end">
          <button
            className="bg-gray-500 py-1 px-3 rounded-lg text-md text-white font-medium hover:bg-gray-600 cursor-pointer"
            onClick={() => setOpenResponse(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResponseModal;
