import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useAuth } from "./context/UserContext";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        )}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
