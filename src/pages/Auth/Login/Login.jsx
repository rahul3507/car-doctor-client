/** @format */

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero h-screen  w-full">
      <div className="hero-content w-full  flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 text-center ">
          <img src="Login-banner.png" alt="" className="mx-auto" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold dark:text-white">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
