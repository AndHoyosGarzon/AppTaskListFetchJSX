//POST CREATE USER
export const postCreateUser = async () => {
  const url = "https://playground.4geeks.com/todo/users/andresh";
  await fetch(url, {
    method: "POST",
  })
    .then((res) => {
      if (res.ok) {
        console.log("usuario existe");
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

//GET
/* export const getFetch = async (setTaskList) => {
  const url = "https://playground.4geeks.com/todo/users/andresh";
  await fetch(url)
    .then((res) => {
      if (!res.ok ) {
        console.log("hay un error desde funcion GET");
      }
      return res.json();
    })
    .then((data) =>  setTaskList(data.todos))
    .catch((error) => console.log(error));
}; */

//POST CREATE TASK
export const postTaskFetch = async (task) => {
  const url = `https://playground.4geeks.com/todo/todos/andresh`;
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      label: task,
      is_done: false,
    }),
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusTex);
      return res.json();
    })
    .then((data) => {
      console.log(`La tarea es: ${data.label}`);
    })
    .catch((error) => console.log("el error es", error));
};

//DELETE USER
export const deleteUserFetch = async () => {
  const url = "https://playground.4geeks.com/todo/users/andresh";
  await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        alert("usuario delete");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
