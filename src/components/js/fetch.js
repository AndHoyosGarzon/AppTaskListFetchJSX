//POST CREATE USER
const postCreateUser = async () => {
  const url = `https://playground.4geeks.com/todo/users/andresh`;
  await fetch(url, {
    method: "POST",
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

///delete task
