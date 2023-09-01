import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar, PageContainer } from "./components";
import { LoginPage } from "./pages";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <PageContainer className={pathname === "/"}>
        {pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
