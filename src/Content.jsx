import Operator from "./Operator";
import Todo from "./Todo";

export default function Content({ obj }) {
  return (
    <>
      <div className="content">
        <div className="todo-list">
          {obj.map((e, index) => {
            return <Todo obj={e} key={random()} index={index} />;
          })}
        </div>
        <Operator list={obj}></Operator>
      </div>
    </>
  );
}

function random() {
  const array = [];
  let count = 0;
  while (count < 8) {
    count++;
    array.push(Math.floor(Math.random() * 9));
  }
  return array.join("");
}
