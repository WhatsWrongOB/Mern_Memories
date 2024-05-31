import React, { useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password,username);
  };

  return (
    <section className="login">
      <div className="form register_form">
        <div className="login_upper">
          <h1>Register</h1>
        </div>
        <div className="login_bottom">
          <form className="login_form" onSubmit={handleLogin}>
          <div className="user_pass">
              <FaUser color="black" size={19} />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              </div>
            <div className="user_email">
              <FaUser color="black" size={19} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="user_pass">
              <FaKey color="black" size={19} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login_btn">
              {loading ? (
                <ClipLoader loading={loading} size={15} color="white" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
        <p className="link_home">
          Already have an acount? <Link to="/login">login</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
