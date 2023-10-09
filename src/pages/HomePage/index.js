import React from 'react';
import List from "../../components/List";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="btnsContainer">
        <Link to="/posts/new" className="btn"> Создадим новый пост </Link>
      </div>
      <List />
    </>
  );
}

export default HomePage;