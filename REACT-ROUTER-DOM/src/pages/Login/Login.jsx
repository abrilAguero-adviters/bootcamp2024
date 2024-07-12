const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({ formData });
    const formProps = Object.fromEntries(formData);
    console.log({ formProps });
    handleChange({ formProps });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text"></input>

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password"></input>

      <input type="submit" />
    </form>
  );
};
export default Login;
