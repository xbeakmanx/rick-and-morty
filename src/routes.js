import { Route, Routes } from "react-router-dom";
// layouts
import MainLayout from "layout/MainLayout";
// pages
import Home from "pages/Home";
import Favorite from "pages/Favorite";
import Character from "pages/Character";
// ----------------------------------------------------------------------

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={"error 404"} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/character/:id" element={<Character />} />
      </Route>
    </Routes>
  );
}
