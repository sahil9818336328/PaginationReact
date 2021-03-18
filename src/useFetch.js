import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGithubUsers = async () => {
    const response = await fetch(url);
    const finalResponse = await response.json();
    setData(paginate(finalResponse));
    setLoading(false);
  };

  useEffect(() => {
    getGithubUsers();
  }, []);
  console.log(data);
  return { loading, data };
};
