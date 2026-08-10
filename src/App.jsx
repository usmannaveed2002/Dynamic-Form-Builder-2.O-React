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

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar whichField={whichField} setWhichField={setWhichField} />
        <FormPreview
          whichField={whichField}
          label={label}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
        />
      </div>
      <OpenModal whichField={whichField} setWhichField={setWhichField} />
    </>
  );
}

export default App;
