//使用axios从json-server获取数据
import axios from "axios";

const baseUrl = "http://localhost:3003/notes";

const getAll = async () => {
  const respnose = await axios.get(baseUrl);
  return respnose.data;
};

export default { getAll };
