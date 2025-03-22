import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent";
import Dashboard from "./pages/Dashboard";
const NotFound = () => <h1>404 - Page Not Found</h1>;

export default function App() {

  return (
    <>

    <BrowserRouter>
      <AppBarComponent />
      <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
 }