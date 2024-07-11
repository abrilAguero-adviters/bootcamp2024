import { useState } from "react";
import Card from "../components/Card/Card";
import CustomTable from "../components/CustomTable/CustomTable";
import "./alumnos.css";

const Alumnos = ({ data }) => {
  const [isTable, setIsTable] = useState(true);

  return (
    <div className="container">
      <button className="button" onClick={() => setIsTable(!isTable)}>
        {isTable ? "Lista" : "Tabla"}
      </button>
      {isTable ? (
        <CustomTable columns={[]} data={data} />
      ) : (
        <div className="card-container">
          {data.map((alumno) => (
            <Card alumno={alumno} key={alumno.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Alumnos;
