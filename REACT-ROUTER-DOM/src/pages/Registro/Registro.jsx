const Registro = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({ formData });
    const formProps = Object.fromEntries(formData);
    console.log({ formProps });
    //handleChange({ formProps });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text"></input>

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password"></input>

      <label htmlFor="repeatPassword">Repeat password</label>
      <input id="repeatPassword" name="repeatPassword" type="password"></input>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email"></input>

      <label htmlFor="date">Birthday</label>
      <input id="date" name="date" type="date"></input>

      <input type="submit" />
    </form>
  );
};
export default Registro;
