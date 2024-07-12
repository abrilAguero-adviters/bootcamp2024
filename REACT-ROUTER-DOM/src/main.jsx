import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ROUTES } from "./constants/routes.constants.js";
import Login from "./pages/Login/Login.jsx";
import Registro from "./pages/Registro/Registro.jsx";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTRO,
        element: <Registro />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// Example with BrowserRouter component
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       {/* <Route index element={<Home />} /> --> index toma el path del padre ('/')
//       <Route path="blogs" element={<Blogs />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="*" element={<NoPage />} /> */} --> página por defecto en caso de no encontrar la ruta
//     </Route>
//   </Routes>
// </BrowserRouter>
