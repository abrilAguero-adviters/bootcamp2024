const FormWithStates = ({ handleChange }) => {
  //   const [equipo1, setEquipo1] = useState(0);
  //   const [equipo2, setEquipo2] = useState(0);

  const [values, setValues] = useState({
    equipo1: 0,
    equipo2: 0,
  });

  return (
    <>
      <input
        type="number"
        min={0}
        name="equipo1"
        value={values.equipo1}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            equipo1: e.target.value,
          }))
        }
      />
      <input
        type="number"
        min={0}
        name="equipo2"
        value={values.equipo2}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            equipo2: e.target.value,
          }))
        }
      />
      {/* 
      <input
        type="number"
        min={0}
        name="equipo2"
        value={equipo2}
        onChange={(e) => setEquipo2(e.target.value)}
      /> */}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleChange({});
        }}>
        Enviar
      </button>
    </>
  );
};
export default FormWithStates;
