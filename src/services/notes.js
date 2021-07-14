//使用axios从json-server获取数据
import axios from "axios";

const baseUrl = "http://localhost:3003/notes";

const getAll = async () => {
  const respnose = await axios.get(baseUrl);
  return respnose.data;
};
const createNew = async (content) => {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  console.log(response);

  return response.data;
};
// const updateNote = async (id, newNote) => {
//   const response = await axios.put(`${baseUrl}/${id}`, newNote);
//   return respnose.data;
// };
export default { getAll, createNew };
