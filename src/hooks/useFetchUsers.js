import { useState, useEffect } from "react";
import { getAllUsers, getUser } from "../utils/getAllUsers.js";

export const getUsersGitHub = (user) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://api.github.com/users";

  const getUsers = async (user) => {
    if (user) {
      const userInfo = await getUser(URL, user);
      setUsers([userInfo]);
    } else {
      const allUsers = await getAllUsers(URL);
      setUsers(allUsers);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers(user);
  }, [user]);

  return {
    users,
    isLoading,
  };
};
