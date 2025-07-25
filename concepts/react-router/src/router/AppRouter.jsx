import { BrowserRouter, Route, Routes } from "react-router";

import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import App from "../App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
