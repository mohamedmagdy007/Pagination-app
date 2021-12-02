// import React from "react";
import { useState, useEffect } from "react";
import Paginate from "./paginate";
const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";
export default function FetchData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setData(Paginate(data));
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
}
