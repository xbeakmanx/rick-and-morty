import { Route, Routes } from "react-router-dom";
// layouts
import MainLayout from "layout/MainLayout";
// pages
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import Character from "pages/Character";
// ----------------------------------------------------------------------

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={"error 404"} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/character/:id" element={<Character />} />
      </Route>
    </Routes>
  );
}
