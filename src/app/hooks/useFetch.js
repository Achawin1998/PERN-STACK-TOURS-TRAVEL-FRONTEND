"use client";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(url, {
          headers: { "Content-Type": "application/json" },
          credentials: "include", // เพราะมีการใช้คุกกี้ส่วนของ backend ในคำขอ API เลยต้องใช้ credentials เพื่อรักษาข้อมูลเซสชันหรือการรับรองตัวตน
        });

        if (!res.ok) {
          setError("Failed to fetch data");
          alert("Failed to fetch data");
          setLoading(false);
          return;
        }

        const result = await res.json();
        setData(result.data);
      } catch (error) {
        setError("Failed to fetch data");
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
