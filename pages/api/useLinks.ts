import { useEffect, useState } from "react";
const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export function useLinks() {
  const [data, setData] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | any>(null);

  const fetchData = async (data: any) => {
    try {
      const response = await fetch(`${BASE_URL}users/1/links`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("불러오는데 실패 했습니다.");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
