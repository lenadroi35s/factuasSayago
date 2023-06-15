import axios from "axios";
export const PostFacturas = async (datos) => {
  try {
    const URL = `http://localhost:3676/facturar`;
    const response = await axios.post(URL, datos);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};
