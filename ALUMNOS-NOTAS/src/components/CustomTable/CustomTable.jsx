import { ITEMS_PER_PAGE } from "../../constants/shares";
import usePagination from "../../hooks/usePagination";
import "./CustomTable.css";

const CustomTable = ({ data }) => {
  const {
    currentData,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(data, ITEMS_PER_PAGE);

  return (
    <div className="rwd-table-container">
      <table className="rwd-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((alumno) => (
            <tr key={alumno.id}>
              <td data-th="ID">{alumno.id}</td>
              <td data-th="Nombre">{alumno.nombre}</td>
              <td data-th="Apellido">{alumno.apellido}</td>
              <td data-th="Edad">{alumno.edad}</td>
              <td data-th="Promedio">{alumno.promedio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="rwd-pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default CustomTable;
