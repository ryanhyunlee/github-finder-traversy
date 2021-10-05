import React, { useEffect } from "react";

const User = ({
  user,
  loading,
  getUser,
  match: {
    params: { login },
  },
}) => {
  useEffect(() => {
    getUser(login);
  }, []);

  return (
    <div>
      <h2>User</h2>
    </div>
  );
};

export default User;
