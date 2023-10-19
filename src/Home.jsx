import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"

function Home() {


  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => console.log(res))
      .catch((err) => {
        // setError(err);
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <ul className=" flex items-center text-center space-x-11 pt-3 pl-[900px]">
          <li>Accueil</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
export default Home;
