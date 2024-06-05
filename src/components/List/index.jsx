import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { FaUserMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { getFetch, postTaskFetch, deleteUserFetch } from "../js/fetch";

function List() {
  const [clear, setClear] = useState(true);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getFetch();
  }, []);

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

  const handleDelete = (idx) => {
    setTaskList(
      taskList.filter((task, i) => {
        return i !== idx;
      })
    );
  };

  const handleBtnUserClear = () => {
    setClear(!clear);
    deleteUserFetch();
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
            taskList.length < 1 ? "Add your first task" : "one more task"
          }
        />
      </div>
      <ul className="list-group">
        {taskList.map((el, idx) => {
          return (
            <li key={idx} className="list-group-item">
              {el.toUpperCase()}
              <span className="ms-3 ">
                <IoTrashBin onClick={() => handleDelete(idx)} color="darkred" />
              </span>
            </li>
          );
        })}
        <p className="text-start text-secondary mt-5">
          {taskList.length < 1
            ? "No tiene tareas"
            : `${taskList.length} Tareas pendientes`}
          <span className="ms-3 fs-5">
            <IoBookOutline />
          </span>
        </p>
      </ul>
      <div className="my-4">
        {taskList.length < 1 ? (
          ""
        ) : (
          <button
            className={`px-3 btn btn-${
              clear ? "warning" : "danger"
            } border-dark`}
            onClick={handleBtnUserClear}
          >
            {clear ? <FaUserMinus /> : <FaCheck />}
          </button>
        )}
      </div>
    </div>
  );
}

export default List;
