import "./App.css";
import Loading from "./components/Loading/Loading";

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
