import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Metas } from "./pages/Metas";
import { GrindTraker } from "./pages/GrindTraker";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/grind-traker" element={<GrindTraker />} />
      </Route>
    </Routes>
  );
}
