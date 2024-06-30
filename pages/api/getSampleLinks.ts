import axiosInstance from "./axiosInstance";

type Data = {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
};

export async function getSampleLinks(): Promise<Data[]> {
  const response = await axiosInstance.get("/sample/links");
  const data: Data[] = response.data;
  return data;
}
