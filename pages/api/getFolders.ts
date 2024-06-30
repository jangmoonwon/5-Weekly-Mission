import axiosInstance from "./axiosInstance";

type Data = {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
};

export async function getFolders(): Promise<Data[]> {
  const response = await axiosInstance.get("/users/1/folders");
  const data: Data[] = response.data;
  return data;
}
