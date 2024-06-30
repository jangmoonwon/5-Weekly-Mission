import axiosInstance from "./axiosInstance";

type Data = {
  id: number;
  created_at: string;
  favorite: boolean;
  url: string;
  title: string;
  image_source: string;
  description: string;
};

export async function getLinks(): Promise<Data[]> {
  const response = await axiosInstance.get("/users/1/links");
  const data: Data[] = response.data;
  return data;
}
