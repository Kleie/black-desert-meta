import axios from "axios";

const obj = { username: "Farelo" };

axios.patch("http://localhost:3000/users/1", obj).then((res) => console.log(res.data));
