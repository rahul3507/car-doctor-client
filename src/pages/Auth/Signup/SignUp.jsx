/** @format */
import { Link } from "react-router-dom";
const SignUp = () => {
  const handleSignUp = (event) => {
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
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset">
                <label className="label dark:text-white">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input dark:text-white"
                  placeholder="Enter your name"
                />
                <label className="label dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input dark:text-white"
                  placeholder="Enter email"
                />
                <label className="label dark:text-white">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input dark:text-white"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4" type="submit">
                  Sign Up
                </button>
              </fieldset>
            </form>
            <p className="my-4 text-center dark:text-white">
              Already have an account?
              <Link className="text-orange-600 font-bold" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
