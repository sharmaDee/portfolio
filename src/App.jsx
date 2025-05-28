import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Headerside } from "./component/Headerside";
import { Sidebar } from "./component/Sidebar";
import { Homepage } from "./pages/home/Homepage";
import { Webagency } from "./pages/Projects/Webagency";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
             <div className="bg-gradient-to-br from-Eerieblack to-gray-800 font-poppins"> <Sidebar /> <Headerside /> <Homepage /></div>
            </>
          }
        />
        <Route path="/Webagency" element={<Webagency />} />
      </Routes>
    </>
  );
}

export default App;
