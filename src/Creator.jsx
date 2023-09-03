import { useState } from "react";

export default function Creator({ add }) {
  const [value, setValue] = useState("");
  return (
    <label className="todo-creator" htmlFor="new-todo">
      <button
        onClick={() => {
          if (value.length < 2) return;
          add(value);
          setValue("");
        }}
        className="circle"></button>

      <input
        maxLength={1000}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="new-todo"
        type="text"
        placeholder="Create a new todo..."
      />
    </label>
  );
}
