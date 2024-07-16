import { useAuth } from "../../../context/UserContext";

const Header = () => {
  const { user, setUser } = useAuth();

  console.log({ user });

  return (
    <>
      <div style={{ textAlign: "center" }}>Header</div>
      <div>Hola: {user?.nombre}</div>
    </>
  );
};
export default Header;
