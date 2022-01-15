import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const signin = (formData) => API.post("/signup", formData);

// export default {
//   signup: function (formData) {
//     return API.post("/signin", formData);
//   },
// };
