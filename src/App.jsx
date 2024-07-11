import "./App.css";
import ErrorPage from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import { useBuscarInfo } from "./hooks/useBuscarInfo";
import Alumnos from "./pages/Alumnos";

const App = () => {
  const { data, loading, error } = useBuscarInfo();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }
  return <Alumnos data={data} />;
};

export default App;
