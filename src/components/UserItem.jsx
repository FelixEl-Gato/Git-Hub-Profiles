import React from "react";

export const UserItem = ({ url, login, name }) => {
  return (
    <div>
      <img src={url} />
      <h1>{login}</h1>
      <h1>{name}</h1>
      <span>view</span>
    </div>
  );
};
