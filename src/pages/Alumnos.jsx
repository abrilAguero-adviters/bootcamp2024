import Card from "./../components/Card/Card";
const Alumnos = ({ data }) => {
  return data.map((alumno) => <Card alumno={alumno} />);
};

export default Alumnos;
