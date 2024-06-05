//POST CREATE USER
const postCreateUser = async () => {
  const url = `https://playground.4geeks.com/todo/users/${"andresh"}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      if (!res.ok) console.log(res.statusText);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

//GET
export const getFetch = async () => {
  const url = "https://playground.4geeks.com/todo/users/andresh";
  await fetch(url)
    .then((res) => {
      if (res.statusText === "Not Found") {
        postCreateUser();
      }
      return res.json();
    })
    .then((data) => console.log("loggedUser:", data.name))
    .catch((error) => error);
};

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
      for (let prop in data) {
        if (prop.label !== "") {
          let str = data.label;
          console.log("New Task: ", str);
        }
      }
    })
    .catch((error) => console.log("el error es", error));
};

//DELETE TASKS
/* export const deleteTaskFetch = async () => {
  const url = `https://playground.4geeks.com/todo/users/`;
  await fetch(
    url   {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  } 
  )
    .then((res) => {
      if (!res.ok) throw Error(res.statusTex);
      return res.json();
    })
    .then((data) => {
      console.log(data.users.name);
    })
    .catch((error) => console.log(error));
};
 */
//DELETE USER
export const deleteUserFetch = async () => {
  const url = "https://playground.4geeks.com/todo/users/andresh";
  await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      if (res.statusText === "Not Found") {
        console.log("usuario delete");
      }
      return res.json();
    })
    .then((data) => console.log(data.status))
    .catch((error) => console.log(error));
};
