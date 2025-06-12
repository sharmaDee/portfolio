import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Headerside } from "./component/Headerside";
import { Sidebar } from "./component/Sidebar";
import { Homepage } from "./pages/home/Homepage";
import { Webagency } from "./pages/Projects/Webagency";
import { Aboutus } from './pages/about/Aboutus';
import { Blogcontent } from './pages/blog/Blogcontent';
import { Blogdetail } from './pages/blog/Blogdetail';


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
         <Route path="/Aboutus" element={<Aboutus />} />
         <Route path="/Blogcontent" element={<Blogcontent />} />
         <Route path="/Blogdetail" element={<Blogdetail />} />
      </Routes>
    </>
  );
}

export default App;
