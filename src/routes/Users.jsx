import { useState } from "react";
import { Logo } from "../components/Logo";
import { UserSearch } from "../components/UserSearch";
import { UsersGrid } from "../components/UsersGrid";

export const Users = () => {
  const [user, setUser] = useState("");

  const handleUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <div>
      <div>
        <Logo />
        <UserSearch
          placeholder={"Search GitHub Username"}
          onNewUser={handleUser}
        />
        <UsersGrid user={user} />
      </div>
    </div>
  );
};
