import FormPreview from "../components/formPreview";
import OpenModal from "../components/openModal";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function CreateFormPage() {
  const [whichField, setWhichField] = useState("");
  return (
    <div className="flex">
      <Sidebar setWhichField={setWhichField} />
      <FormPreview whichField={whichField} />
      <OpenModal whichField={whichField} setWhichField={setWhichField} />
    </div>
  );
}

export default CreateFormPage;
