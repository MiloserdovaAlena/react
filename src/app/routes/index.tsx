import React from "react";
import { Route, Routes } from "react-router-dom";
import Artem from "../../pages/Artem/Artem";
import Valera from "../../pages/Valera/Valera";
import Anna from "../../pages/Anna/Anna";
import TablePagination from "../../pages/TablePagination/TablePagination";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="artem" element={<Artem />} />
      <Route path="valera" element={<Valera />} />
      <Route path="Anna" element={<Anna />} />
      <Route path="table_pagination" element={<TablePagination />} />
    </Routes>
  );
};

export default MainRouter;
