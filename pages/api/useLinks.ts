import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

type Data = {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title?: string;
  description?: string;
  image_source: string;
  folder_id?: number;
};

type DataType = {
  data: Data[];
};

export function useLinks() {
  const [data, setData] = useState<null | Data[]>(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState<null | any>(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get<DataType>("/users/1/links");
      const data = response.data.data;
      setData(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}
