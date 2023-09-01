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

function App() {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("userinfo"));
  return (
    <>
      <PageContainer className={pathname === "/"}>
        {pathname !== "/" && <NavBar />}
        <Routes>
      
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {user?.name && user?.email ? (
            <>
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/question/:Id/:category"
                element={<QuestionPage />}
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
