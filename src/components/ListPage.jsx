import React from 'react';
import {useParams, Redirect} from "react-router-dom";
import List from "../containers/todo/ListContainer";

function ListPage(props) {
  const id = parseInt(useParams().id);
  const list = props.lists.find(list => list.id === id);
  if (!list) return <Redirect to="/" />;
  return (
      <List
        key={id}
        id={id}
        name={list.name}
      />
  );
}

export default ListPage;