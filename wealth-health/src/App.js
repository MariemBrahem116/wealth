/* react */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
/*  pages */
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage";
import ListEmployeePage from "./pages/ListEmployeePage/ListEmployeePage";
/* css  */
import './App.css';
/**
 * Const Header import the Header  component  with lazy for optimize perf.
 *  Lazy call the component when is necessary
 */
const Header = lazy(() => import('./components/Header/Header'));
/**
 * @function App
 * @export
 * @description component that block structure and declaration of the differents
 *  routes for this website
 * @return {HTMLElement} component generated HTML
 */
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
      </Suspense>
      <Routes>
        <Route index path="/" element={<CreateEmployeePage />} />
        <Route path="/list" element={<ListEmployeePage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;