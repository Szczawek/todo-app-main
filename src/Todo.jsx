import { useContext } from "react";
import { appFunc } from "./App";

export default function Todo({ index, obj }) {
  const func = useContext(appFunc);
  function DragStart(e, index) {
    e.dataTransfer.setData("text/plain", index);
  }

  function DragOver(e) {
    e.preventDefault();
  }

  function Drop(e, targetIndex) {
    const sourceIndex = e.dataTransfer.getData("text/plain");
    if (targetIndex == sourceIndex) return;
    func["moveTodo"](targetIndex, sourceIndex);
  }

  return (
    <div
      draggable
      onDragStart={(e) => DragStart(e, index)}
      onDragOver={DragOver}
      onDrop={(e) => Drop(e, index)}
      className="todo"
      key={index}>
      <input
        type="checkbox"
        className="circle"
        defaultChecked={obj["checked"]}
        onChange={(e) => func["swapCheckedState"](index, e.target.checked)}
      />
      <p className={`todo-text${obj["checked"] ? " active" : " unactive"}`}>
        {obj["text"]}
      </p>

      <button onClick={() => func["removeTodo"](index)}>
        <img src="images/icon-cross.svg" alt="todo delete button" />
      </button>
    </div>
  );
}
