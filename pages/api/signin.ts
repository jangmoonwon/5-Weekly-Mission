import axiosInstance from "./axiosInstance";

type DataType = {
  email: string;
  password: string;
};

export default async function signin(data: DataType) {
  const res = await axiosInstance.post("/sign-in", data);
  const newRes = res.data;
  const accessToken = newRes.data.accessToken;

  return accessToken;
}
