import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar, PageContainer } from "./components";
import { HomePage, LoginPage, QuestionPage, ReportPage } from "./pages";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <PageContainer className={pathname === "/"}>
        {pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/question/:Id/:category" element={<QuestionPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
