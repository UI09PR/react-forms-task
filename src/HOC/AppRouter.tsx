import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, memo, Suspense } from "react";
import { useAppSelector } from "../redux/hooks";
import ProtectedRouter from "./ProtectedRouter";

const Layout = lazy(() => import("./Layout"));
const Loader = lazy(() => import("./Loader"));
const Step1 = lazy(() => import("../pages/Step1"));
const Step2 = lazy(() => import("../pages/Step2"));
const Step3 = lazy(() => import("../pages/Step3"));
const NotFound = lazy(() => import("../pages/NotFound"));

const RouterLayout = () => {
  const { workPlace, address, lastName, phone, firstName, gender } = useAppSelector(
    (store) => store.formsDataSlice
  );
  
  const step2Allowed = !!lastName && !!phone && !!firstName && !!gender;
  const step3Allowed = !!workPlace && !!address && step2Allowed;
  return (
    <Router>
      <Suspense fallback={<Loader type="global" />}>
        <Routes>
          <Route path="/" element={<Navigate to="/step1" replace />} />
          <Route path="/" element={<Layout />}>
            <Route path="step1" element={<Step1 />} />
            <Route
              path="step2"
              element={
                <ProtectedRouter isAllowed={step2Allowed} redirect="/">
                  <Step2 />
                </ProtectedRouter>
              }
            />
            <Route
              path="step3"
              element={
                <ProtectedRouter isAllowed={step3Allowed} redirect="/">
                  <Step3 />
                </ProtectedRouter>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default memo(RouterLayout);
