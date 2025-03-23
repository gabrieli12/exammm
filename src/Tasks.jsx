import React, { useState, useEffect } from "react";
import { usePro } from "./Context";

function Tasks() {
  const [currentVal, setCurrentVal] = useState('');
  const [passData, setPassData] = useState(() => {
    const savedTodo = localStorage.getItem("passTodo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  const [isEdit, setIsEdit] = useState(false)
  const [editCurrentVal, setEditCurrentVal] = useState('')

  useEffect(() => {
    localStorage.setItem("passTodo", JSON.stringify(passData));
  }, [passData]);

  const { todo, setTodo } = usePro();

  const handleChange = (e) => {
    setCurrentVal(e.target.value);
  };

  const submit = () => {
    setTodo((prev) => {
      return [...prev, currentVal];
    });

    setCurrentVal("");
  };

  const deleteItem = (e) => {
    const id = parseInt(e.target.id);

    setTodo((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });

    console.log("click");
  };

  const deleteItemPass = (e) => {
    const id = parseInt(e.target.id);

    setPassData((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const edit = (e) => {
    const id = parseInt(e.target.id)
    // const newValue = todo[id];

    // const list = [...todo]
    // list[id] = editCurrentVal
    // console.log(list)

    setTodo((prev) => {
      const list = [...prev]
      list[id] = editCurrentVal

      return list
    })

    setIsEdit(false)
    
    // console.log(e.target.id)
    
  };

  const done = (e) => {
    const newVal = todo[e.target.id];
    setPassData((prev) => {
      return [...prev, newVal];
    });
  };

  return (
    <section className="p-4 flex flex-col justify-center items-center gap-10">
      <div className="flex gap-2">
        <input
          value={currentVal}
          className="border"
          onChange={handleChange}
          type="text"
        />
        <button onClick={submit}>Add</button>
      </div>

      <div className="border border-amber-300">
        {todo.map((item, index) => {
          return (
            <div className="flex flex-col p-5" key={index}>
              <h2>Title {index}</h2>
              <div className="flex gap-3 border  p-3">
                <p>{item}</p>
                <button id={index} className="text-yellow-400 cursor-pointer" onClick={() => setIsEdit(!isEdit)}>
                  edit
                </button>
                <button
                  id={index}
                  onClick={deleteItem}
                  className="text-red-600 cursor-pointer"
                >
                  delete
                </button>
                <button
                  id={index}
                  className="text-green-400 cursor-pointer"
                  onClick={(e) => {
                    done(e);
                    deleteItem(e);
                  }}
                >
                  done
                </button>
              </div>

              <div className={`w-full border bg-black flex justify-center items-center gap-3 overflow-hidden  ${isEdit ? 'h-auto  p-4' : 'h-[0px]'} transition-all `}>
                <input onChange={(e) => {setEditCurrentVal(e.target.value)}} className="border p-2" placeholder="edit" type="text" />
                <button id={index} onClick={edit}>edit</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <hr />
        <h1 className="text-green-800">Colmpeted</h1>

        <div>
          {passData.map((item, index) => {
            return (
              <div key={index} id={index} className="flex gap-3 border m-5 p-3">
                <p className="text-green-300">{item}</p>
                <button
                  id={index}
                  className="text-red-600 cursor-pointer"
                  onClick={deleteItemPass}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tasks;
