import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";

const Login = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    setUser({ nombre: userName, id: Math.random().toString() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">User name</label>
      <input type="text" id="userName" name="userName" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
