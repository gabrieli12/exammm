import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";


export const Context = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem('todo')
    return savedTodo ? JSON.parse(savedTodo) : []
  });

  const [acc, setAcc] = useState(() => {
    const savedAcc = localStorage.getItem('acc')
    return savedAcc ? JSON.parse(savedAcc) : []
  });


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // const [isLogIn, setIsLogIn] = useState(false)
  const [isLogIn, setIsLogIn] = useState(() => {
    const savedLog = localStorage.getItem('isLogIn')
    return savedLog ? JSON.parse(savedLog) : []
  });


  useEffect(() => {
    localStorage.setItem("isLogIn", JSON.stringify(isLogIn));
  }, [isLogIn]);


  return (
    <Context.Provider value={{ todo, setTodo, isLogIn, setIsLogIn, acc, setAcc }}>{children}</Context.Provider>
  );
}

export const usePro = () => useContext(Context);

export default Provider;
