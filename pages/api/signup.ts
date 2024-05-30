import axiosInstance from "./axiosInstance";

type DataType = {
  email: string;
  password: string;
};

export default async function signup(data: DataType) {
  const res = await axiosInstance.post("/check-email", data);
  const newRes = res.data;
  const accessToken = newRes.data.accessToken;
  return accessToken;
}
