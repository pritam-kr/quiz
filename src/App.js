import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar, PageContainer } from "./components";
import {
  HomePage,
  LoginPage,
  QuestionPage,
  ReportPage,
  NotFoundPage,
} from "./pages";
import { useState } from "react";

function App() {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("userinfo"));
  const [timerId, setTimerId] = useState(null);

  return (
    <>
      <PageContainer className={pathname === "/"}>
        {pathname !== "/" && (
          <NavBar timerId={timerId} setTimerId={setTimerId} />
        )}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {user?.name && user?.email ? (
            <>
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/question/:Id/:category"
                element={<QuestionPage timerId={timerId} />}
              />
              <Route path="/report" element={<ReportPage />} />
            </>
          ) : (
            <Route path="/" element={<LoginPage />} />
          )}
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
