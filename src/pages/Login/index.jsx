import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="card p-5 mx-auto" style={{ width: 300 }}>
      {' '}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <h5>
        Or <Link to="/registration">Registration</Link>
      </h5>
    </div>
  );
};

export default Login;
