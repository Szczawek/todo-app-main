import { createContext, useEffect, useState } from "react";
import Content from "./Content";
import Creator from "./Creator";
import Header from "./Header";

const appFunc = createContext();

const pack = [
  { text: "Complete online JavaScript course", checked: true },
  { text: "Jog round the park 3x", checked: false },
  { text: "10 minutes meditation", checked: false },
  { text: "Read for 1 hour", checked: false },
  { text: "Pick up groceries", checked: false },
  { text: "Complete Todo App on Frontend Mentor", checked: false },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [todo, setTodo] = useState(pack);
  const [filteredTodo, setFilteredTodo] = useState([]);
  useEffect(() => {
    reset();
  }, [todo]);

  // default todo
  function reset() {
    setFilteredTodo(todo);
  }
  // set the oposite state of checked
  function swapCheckedState(index, boolen) {
    const copy = [...todo];
    copy[index]["checked"] = boolen;
    setTodo(copy);
  }
  //filtering todos to marked or unmarked
  function setFilter(boolen) {
    const filterArray = todo.filter((e) => e["checked"] == boolen);
    setFilteredTodo(filterArray);
  }

  // Add Todo
  function addTodo(newTodo) {
    const obj = {
      text: newTodo,
      checked: false,
    };
    setTodo((prev) => [...prev, obj]);
  }

  // Remove Todo
  function removeTodo(index) {
    const copy = [...todo];
    copy.splice(index, 1);
    setTodo(copy);
  }

  // remove complated
  function removeComplatedTodo() {
    const remove = todo.filter((e) => !e["checked"]);
    setTodo(remove);
  }
  // Switch between light and dark modes
  function ToggleMode() {
    setDarkMode((prev) => !prev);
  }

  // drag and drop mode function
  function moveTodo(finallPlace, previousPlace) {
    const copy = [...todo];
    const text = copy[previousPlace];
    copy.splice(previousPlace, 1);
    copy.splice(finallPlace, 0, text);
    setTodo(copy);
  }
  return (
    <>
      <picture>{darkMode ? <DarkImg /> : <LightImg />}</picture>
      <main>
        <div className="container">
          <appFunc.Provider
            value={{
              removeTodo,
              moveTodo,
              removeComplatedTodo,
              swapCheckedState,
              setFilter,
              reset,
            }}>
            <Header switchFunc={ToggleMode} currentMode={darkMode} />
            <Creator add={addTodo} />
            <Content obj={filteredTodo} />
          </appFunc.Provider>
          <p className="info-drop">Drop and Drag to reorder list</p>
        </div>
      </main>
    </>
  );
}

function DarkImg() {
  return (
    <>
      <source srcSet="images/bg-mobile-dark.jpg" media="(width < 600px)" />
      <img src="images/bg-desktop-dark.jpg" alt="decoration" />
    </>
  );
}

function LightImg() {
  return (
    <>
      <source srcSet="images/bg-mobile-light.jpg" media="(width < 600px)" />
      <img src="images/bg-desktop-light.jpg" alt="decoration" />
    </>
  );
}
export { appFunc };
