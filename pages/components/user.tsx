import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div key={user.id}>{user.username}</div>
      <div key={user.id}>{user.email}</div>
    </div>
  );
};

export default User;
