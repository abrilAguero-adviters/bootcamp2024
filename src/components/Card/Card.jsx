import "./card.css";

const Card = ({ alumno }) => {
  return (
    <div className="card-list">
      <h2>{alumno.nombre}</h2>
      <p>Promedio: {alumno.edad}</p>
    </div>
  );
};

export default Card;
