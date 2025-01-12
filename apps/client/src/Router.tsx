import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AddRecord, Advices, Budget, Dashboard, More } from "./features";
import { PersonalBudget } from "./features/Budget/Personal/Personal";
import { ErrorPage, Layout } from "./pages";

const isAuthenticated = true;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <>Auth please</>
          }
        />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="budget" element={<Budget />}>
          <Route index element={<Navigate to="personal" replace />} />

          <Route index path="personal" element={<PersonalBudget />} />
          <Route index path="household" element={<div>Household</div>} />
        </Route>

        <Route path="add" element={<AddRecord />} />

        <Route path="advices" element={<Advices />} />

        <Route path="more" element={<More />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route path="login" element={<div>Login</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
