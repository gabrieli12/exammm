import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePro } from "./Context";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpass, setRepeatPass] = useState("");

  //   const [acc, setAcc] = useState([]);
  //
  const { acc, setAcc } = usePro();

  const submit = (e) => {
    // e.preventDefault();

    if (email != "" && (password != "") & (repeatpass == password)) {
      setAcc((prev) => {
        return [...prev, { email, password, repeatpass }];
      });
      setEmail("");
      setPassword("");
      setRepeatPass("");

      navigate("/login");
    }else{
        alert("please enter fill")
    }
  };

  useEffect(() => {
    localStorage.setItem("acc", JSON.stringify(acc));
    console.log(acc);
  }, [acc]);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <h1>registration</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          className="border p-2 rounded-sm"
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <input
          className="border p-2 rounded-sm"
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <input
          className="border p-2 rounded-sm"
          type="text"
          placeholder="repeat password"
          onChange={(e) => {
            setRepeatPass(e.target.value);
          }}
          value={repeatpass}
          required
        />

        <button onClick={submit}>submit</button>

        <p>
          already have account?{" "}
          <Link className="text-blue-400" to="/login">
            LogIn
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
