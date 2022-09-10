import { userEndpoints } from "../config/endpoints";

const login = async (data) => {
  return userEndpoints.login(data);
};

export { login };
