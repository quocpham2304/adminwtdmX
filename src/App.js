import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/typography.css";
import "./assets/css/shortcodes/shortcodes.css";
import "./assets/css/style.css";
import "./assets/css/color/color-1.css";

import LandingPage from "./LandingPage/LandingPage";
import Login from "./Auth/Login";
import Admin from "./Admin/Admin";
import ThemeContextProvider from "./Admin/Context/ThemeContext";
import Tuyendungscreen from "./LandingPage/ViTriTuyenDung/Tuyendungscreen";
import TestQuestion from "./Question/TestQuestion";
import QLViTri from "./Admin/QLViTri/QLViTri";
import TaoDotTuyenDung from "./Admin/QLDotTuyenDung/TaoDotTuyenDung";
import ChiTietDotTuyenDung from "./Admin/QLDotTuyenDung/ChiTietDotTuyenDung";
import EditDotTuyenDung from "./Admin/QLDotTuyenDung/EditDotTuyenDung";
import DanhSachDotTuyenDung from "./Admin/QLDotTuyenDung/DanhSachDotTuyenDung";
import DanhSachUngVien from "./Admin/QLUngVien/DanhSachUngVien";
import QLBaitest from "./Admin/QLBaitest/QLbaitest";
import Themmoibaitest from "./Admin/QLBaitest/ThemBaiTest";

const App = () => {
  //test
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path="/webtuyendungmindX" element={<LandingPage />} />
          <Route path="/webtuyendungmindX/chittiet/:id?" element={<Tuyendungscreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminwtdmX*" element={<Admin />} />
          <Route path="/questions/:id" element={<TestQuestion />} />
          <Route path="/webtuyendungmindX/quan-li-vi-tri" element={<QLViTri />} />
          <Route path="/webtuyendungmindX/dottuyendung/create" element={<TaoDotTuyenDung />} />
          <Route path="/webtuyendungmindX/dottuyendung/chitiet/:idDotTuyenDung" element={<ChiTietDotTuyenDung />} />
          <Route path="/webtuyendungmindX/dottuyendung/edit/:idDotTuyenDung" element={<EditDotTuyenDung />} />
          <Route path="/webtuyendungmindX/dottuyendung" element={<DanhSachDotTuyenDung />} />
          <Route path="/webtuyendungmindX/ungvien" element={<DanhSachUngVien />} />
          <Route path="/webtuyendungmindX/test" element={<Test />} />
          <Route path="/webtuyendungmindX/quan-li-bai-test" element={<QLBaitest />} />
          <Route path="/webtuyendungmindX/quan-li-bai-test/:pageType/:id?" element={<Themmoibaitest />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};
export default App;
