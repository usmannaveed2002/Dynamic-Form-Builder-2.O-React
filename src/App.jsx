import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import FormPreview from "./components/formPreview";
import OpenModal from "./components/openModal";

function App() {
  const [whichField, setWhichField] = useState("");
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [pattern, setPatter] = useState("");
  const [required, setRequired] = useState("");
  const [fields, setFields] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setWhichField={setWhichField} setFields={setFields} />
        <FormPreview whichField={whichField} fields={fields} />
        <OpenModal whichField={whichField} setWhichField={setWhichField} />
      </div>
    </>
  );
}

export default App;
