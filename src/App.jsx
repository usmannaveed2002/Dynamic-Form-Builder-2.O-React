import Navbar from "./components/Navbar";
import FormProvider from "./context/FormContext";
import { Route, Routes } from "react-router-dom";
import CreateFormPage from "./pages/CreateForm";
import FillFormPage from "./pages/FillForm";

function App() {
  return (
    <FormProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateFormPage />} />
        <Route path="/fill-form/:formId" element={<FillFormPage />} />
      </Routes>
    </FormProvider>
  );
}

export default App;
