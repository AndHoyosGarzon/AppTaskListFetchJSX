import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { FaUserMinus } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { postTaskFetch, deleteUserFetch, postCreateUser } from "../js/fetch";

function List() {
  const [clear, setClear] = useState(true);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const retrieveTasks = async () => {
    await fetch("https://playground.4geeks.com/todo/users/andresh")
      .then((res) => {
        if (!res.ok && res.statusText == "Not Found") {
          postCreateUser();
          console.log("llamamos a la funcion que creadora");
        }
        return res.json();
      })
      .then((data) => {
        if (data.todos === undefined) {
          console.log(data.name);
        } else if (data.todos) {
          setTaskList(data.todos);
        }
      })
      .catch((error) => console.log(`El error desde catch: ${error}`));
  };

  useEffect(() => {
    retrieveTasks();
  }, [task]);

  const handlePressKey = (e) => {
    if (task === "" && e.key === "Enter") {
      alert("tarea vacia");
      return;
    }

    if (e.key === "Enter") {
      setTaskList([...taskList, task]);
      postTaskFetch(task);
      setTask("");
    }
  };

  const handleBtnUserClear = () => {
    setClear(!clear);
    deleteUserFetch();
    setTaskList([]);
  };

  //delete task
  const handleDeleteTask = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTaskList(taskList.filter((task) => task.id !== id));
        } else {
          console.error("Error deleting task:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="container text-center bg-light rounded border border-dark p-3 mt-5">
      <h1 className="mt-5 fw-bolder">TASK LIST FECTH</h1>
      <div className="my-5">
        <input
          onKeyDown={handlePressKey}
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="text-center fw-bolder p-2 border-0 rounded bg-primary bg-opacity-10"
          type="text"
          placeholder={
            taskList && taskList.length < 1
              ? "Add your first task"
              : "one more task"
          }
        />
      </div>
      <ul className="list-group">
        {taskList.map((el, idx) => {
          return (
            <li key={idx} className="list-group-item">
              {el.label}
              <span className="ms-3 ">
                <IoTrashBin
                  onClick={() => handleDeleteTask(el.id)}
                  color="darkred"
                />
              </span>
            </li>
          );
        })}
        <p className="text-start text-secondary mt-5">
          {taskList && taskList.length < 1
            ? "No tiene tareas"
            : `${taskList.length} Tareas pendientes`}
          <span className="ms-3 fs-5">
            <IoBookOutline />
          </span>
        </p>
      </ul>
      <div className="my-4">
        {taskList && taskList.length < 1 ? (
          ""
        ) : (
          <button
            className={`px-3 btn btn-warning border-dark`}
            onClick={handleBtnUserClear}
          >
            {clear ? "Delete User" : ""}
            {clear ? <FaUserMinus /> : <FaUserMinus />}
          </button>
        )}
      </div>
    </div>
  );
}

export default List;
