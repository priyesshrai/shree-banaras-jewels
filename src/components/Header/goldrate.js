import { useEffect, useState } from "react";
import axios from "axios";

export const useGoldRate = () => {
  const [goldData, setGoldData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldData = async () => {
      try {
        const response = await axios.get("https://www.goldapi.io/api/XAU/INR", {
          headers: {
            "x-access-token": "goldapi-hjbqpsm4uzdvw7-io",
            "Content-Type": "application/json",
          },
        });
        setGoldData(response.data);
      } catch (error) {
        console.log("Error fetching gold data:", error);
        setError(error);
      }
    };

    fetchGoldData();
  }, []);

  return { goldData, error };
};
