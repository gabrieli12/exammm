import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePro } from './Context';
import { useNavigate } from 'react-router-dom';


function Login() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate()


      const { acc, setAcc, isLogIn, setIsLogIn } = usePro();
      
    

    const submit = (e) => {
        e.preventDefault()

        let foundUser = false

        for(let i=0; i < acc.length; i++) {
            if (acc[i].email === email && acc[i].password === password){
                foundUser = true
                
            }
        }

        if(foundUser){
            setIsLogIn(true)
            console.log("succes")
            navigate('/home')
        }else{
            alert("incorrect email or password")
        }


        setEmail('')
        setPassword('')
}


    return (
        <section className="w-full h-screen flex flex-col justify-center items-center gap-2">
          <h1>Login</h1>
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
    
            <button onClick={submit} >submit</button>
    
            <p>
              dont have account?{" "}
              <Link className="text-blue-400" to='/'>
                Register
              </Link>
            </p>
          </form>
        </section>
    )
    }

export default Login