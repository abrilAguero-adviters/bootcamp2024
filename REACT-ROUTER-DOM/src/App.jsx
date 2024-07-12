import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes.constants";

function App() {
  // const navigate = useNavigate();

  return (
    <>
      {/* Example with react router navigation */}
      {/* <button onClick={() => navigate(ROUTES.LOGIN)}>Login</button> */}

      <Link to={ROUTES.LOGIN}>
        <button>Login</button>
      </Link>

      <Link to={ROUTES.REGISTRO}>
        <button>Registro</button>
      </Link>
    </>
  );
}

export default App;
