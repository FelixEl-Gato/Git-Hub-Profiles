import { useState } from "react";

export const UserSearch = ({ placeholder, onNewUser }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onNewUser(inputValue.trim());
    setInputValue("");
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
