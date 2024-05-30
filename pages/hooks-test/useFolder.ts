import { Folder } from "../type";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

export function useFolder() {
  const [data, setData] = useState<null | Folder>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get<{ folder: Folder }>(
        "/sample/folder"
      );
      const data = response.data.folder;
      setData(data);
      console.log(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}
