// import { useEffect, useState } from "react";
// const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

// export function useFolder() {
//   const [data, setData] = useState<null | any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<null | any>(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}sample/folder`);
//       if (response.ok) {
//         const responseData = await response.json();
//         setData(responseData.data);
//       } else {
//         throw new Error("불러오는데 실패 했습니다.");
//       }
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return { data, loading, error };
// }
