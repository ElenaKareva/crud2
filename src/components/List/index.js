import React, {useState, useEffect} from 'react';
import Time from "../../components/Time";
import {Link} from "react-router-dom";
import "./index.css";


function List() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then(res => res.json())
      .then(data => {
       setList(data)
      });
  }, [])

  if (list == null) {
    return 'Загрузка'
  }

  if (!list.length) {
    return 'Нет опубликованных постов'
  }

  return (
    list.reverse().map(({id, content, created}) => (
      <div className="onePost" key={id}>
        <div className="text">
          <Link to={`/posts/${id}`}>{content}</Link>
        </div>
        <div className="time"><Time time={created} /></div>
      </div>
    ))
  )
}

export default List;