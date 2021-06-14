import React, { useState, useEffect } from "react";
import axios from 'axios'

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
    <div>
      {users.length > 0
        ? users.map((data) => (
            <div>
              <h1>{data.name}</h1>
              <h1>{data.trips}</h1>
            </div>
          ))
        : "Data field is empty"}
    </div>
  );
}
