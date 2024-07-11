import { useState, useEffect } from "react";
import {
  ServicioAlumnos,
  ServicioExamenes,
  ServicioRespuestas,
} from "../services";

import { formatoAlumno } from "../utils/darFormato";

export const useBuscarInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([ServicioAlumnos(), ServicioExamenes(), ServicioRespuestas()])
      .then(([alumnos, examenes, respuestas]) => {
        setData(formatoAlumno(alumnos, examenes, respuestas));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  console.info(data);

  return {
    data,
    loading,
    error,
  };
};
