import axios from "axios";
import { useEffect, useState } from "react";
import { RAPID_API_KEY } from "@env";

type UseFetchResponse = {
  data: any;
  error: string | null;
  isLoading: boolean;
  refetch: () => void;
};

type UseFetch = (
  endpoint: string,
  query: { [key: string]: any }
) => UseFetchResponse;

const rapidApiKey = RAPID_API_KEY;

const useFetch: UseFetch = (endpoint, query) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
      //   query: "Node.js developer in New-York,USA",
      //   page: "1",
      //   num_pages: "1",
      //   date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": rapidApiKey,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      console.log("response.data", response.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default useFetch;
