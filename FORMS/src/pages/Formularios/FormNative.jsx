const FormNative = ({ handleChange = null }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({ formData });
    const formProps = Object.fromEntries(formData);
    console.log({ formProps });
    handleChange && handleChange({ formProps });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" min={0} name="equipo1" />
      <input type="number" min={0} name="equipo2" />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default FormNative;
