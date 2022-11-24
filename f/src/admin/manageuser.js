// import axios from 'axios';
// import React from 'react';

// const baseURL = 'http://localhost:8000/api/user';

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//       console.log(post);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.name}</h1>
//       <p>{post.email}</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import './App.css';

function manageuser() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://localhost:8000/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data && data.length > 0 && data.map((item) => <p>{item.name}</p>)}
    </div>
  );
}

export default manageuser;
