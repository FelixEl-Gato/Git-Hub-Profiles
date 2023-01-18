import { getUsersGitHub } from "../hooks/useFetchUsers.js";
import { UserItem } from "./UserItem.jsx";

export const UsersGrid = ({ user }) => {
  const { users, isLoading } = getUsersGitHub(user);
  return (
    <div>
      {isLoading ? <div>Loading...</div> : null}
      {users.map((user, idx) => {
        return (
          <UserItem
            key={idx}
            url={user.avatar_url}
            login={user.login}
            name={user.name}
          />
        );
      })}
    </div>
  );
};
