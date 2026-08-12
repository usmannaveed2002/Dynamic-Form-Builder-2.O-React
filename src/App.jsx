import Navbar from "./components/Navbar";
import FormProvider from "./context/FormContext";
import { Route, Routes } from "react-router-dom";
import CreateFormPage from "./pages/CreateForm";
import FillFormPage from "./pages/FillForm";
import ViewFormPage from "./pages/ViewForms";
import ViewResponsePage from "./pages/ViewResponses";

function App() {
  return (
    <FormProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateFormPage />} />
        <Route path="/fill-form/:formId" element={<FillFormPage />} />
        <Route path="/fill-form" element={<ViewFormPage />} />
        <Route path="/view-forms/" element={<ViewFormPage />} />
        <Route path="/view-responses/" element={<ViewResponsePage />} />
      </Routes>
    </FormProvider>
  );
}

export default App;
