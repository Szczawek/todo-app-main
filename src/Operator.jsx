import { useContext, useEffect, useState } from "react";
import { appFunc } from "./App";
export default function Operator({ list }) {
  const [amount, setAmount] = useState(0);
  const [active, setActive] = useState("All");
  const func = useContext(appFunc);
  useEffect(() => {
    const num = list.filter((e) => !e["checked"]);
    setAmount(num.length);
  }, [list]);

  return (
    <div className="content-operator">
      <p className="amount">{`${amount} items left`}</p>
      <div className="mark-btns">
        <button
          className={active == "All" ? "current" : ""}
          onClick={(e) => {
            func["reset"]();
            setActive(e.target.textContent);
          }}>
          All
        </button>
        <button
          className={active == "Active" ? "current" : ""}
          onClick={(e) => {
            func["setFilter"](false);
            setActive(e.target.textContent);
          }}>
          Active
        </button>
        <button
          className={active == "Complated" ? "current" : ""}
          onClick={(e) => {
            func["setFilter"](true);
            setActive(e.target.textContent);
          }}>
          Complated
        </button>
      </div>
      <button onClick={() => func["removeComplatedTodo"]()}>
        Clear Completed
      </button>
    </div>
  );
}
