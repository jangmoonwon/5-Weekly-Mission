import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

type Link = {
  count: number;
};

type Data = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
};

type DataType = {
  data: Data[];
};

export function useFolders() {
  const [data, setData] = useState<null | Data[]>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | any>(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get<DataType>("/users/1/folders");
      const data = response.data.data;
      setData(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}
