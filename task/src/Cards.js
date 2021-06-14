import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./cards.css";

export default function Cards() {
  const [page, setPage] = useState(1),
    [users, setUsers] = useState([]);

  useEffect(() => {
    handleApi();
  }, [page]);

  const handleApi = () => {
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=8`)
      .then((res) => res.data)
      .then((data) => setUsers([...users, ...data.data]));
  }

  return (
      <>
    <div className="lingoq-cards">
      {users.length > 0
        ? users.map((data) => (
            <div className="card one">
              <h1>Name: {data.name}</h1>
              <h1>Trips: {data.trips}</h1>
            </div>
          ))
        : "Data field is empty"}
    </div>
    </>
  );
}
