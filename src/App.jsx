import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import FormPreview from "./components/formPreview";
import OpenModal from "./components/openModal";
import FormProvider from "./context/FormContext";

function App() {
  const [whichField, setWhichField] = useState("");

  return (
    <FormProvider>
      <Navbar />
      <div className="flex">
        <Sidebar setWhichField={setWhichField} />
        <FormPreview whichField={whichField} />
        <OpenModal whichField={whichField} setWhichField={setWhichField} />
      </div>
    </FormProvider>
  );
}

export default App;
