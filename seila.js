import axios from "axios";

const obj = {
  id: 1,
  username: "Kleie",
  diaries: [
    {
      id: 1,
      title: "Diarias",
      description: "quest aqui",
      createdAt: "2023-08-02T21:38:18.341Z",
      completed: "2023-08-03T21:38:18.341Z",
    },
  ],
  weeklies: [
    {
      id: 1,
      title: "Semanais",
      description: "quest aqui",
      createdAt: "2023-08-02T21:38:18.341Z",
      completed: "2023-08-03T21:38:18.341Z",
    },
  ],
};

axios.put("http://localhost:3000/users/1", obj).then((res) => console.log(res.data));
