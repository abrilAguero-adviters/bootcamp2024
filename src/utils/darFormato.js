const encontrarExamenesPorAlumno = (alumnoId, examenes, respuestas) => {
  return examenes.filter((examen) =>
    respuestas.find(
      (respuesta) =>
        respuesta.idAlumno === alumnoId && respuesta.idExamen === examen.id
    )
  );
};

const formatoExamen = (alumnoId, examenes, respuestas) => {
  const examenesPorAlumno = encontrarExamenesPorAlumno(
    alumnoId,
    examenes,
    respuestas
  );

  const examenesProcesados = examenesPorAlumno.map((examen) => ({
    ...examen,
    preguntas: formatoPregunta(
      examen.preguntas,
      respuestas,
      alumnoId,
      examen.id
    ),
  }));

  return examenesProcesados;
};

const formatoPregunta = (preguntas, respuestas, idAlumno, idExamen) => {
  return preguntas.map((pregunta) => ({
    ...pregunta,
    respuestaCorrecta: pregunta.opciones.find((opcion) => opcion.esCorrecta)
      ?.id,
    contesto: respuestas.find(
      (respuesta) =>
        respuesta.idAlumno === idAlumno &&
        respuesta.idExamen === idExamen &&
        respuesta.idPregunta === pregunta.id
    )?.idRespuesta,
  }));
};

export const formatoAlumno = (alumnos, examenes, respuestas) => {
  return alumnos.map((alumno) => {
    const examenesFormateados = formatoExamen(alumno.id, examenes, respuestas);
    const examenesConNota = examenesFormateados.map((examen) => ({
      ...examen,
      nota:
        (examen.preguntas.filter(
          (respuesta) => respuesta.contesto === respuesta.respuestaCorrecta
        ).length /
          examen.preguntas.length) *
        10,
    }));

    return {
      ...alumno,
      examenes: examenesConNota,
      promedio:
        examenesConNota.reduce((acum, act) => act.nota + acum, 0) /
        examenes.length,
    };
  });
};
