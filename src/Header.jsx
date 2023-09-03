import colors from "./mode.json";
export default function Header({ switchFunc, currentMode }) {
  return (
    <header className="title-page">
      <h1>TODO</h1>
      <button
        onClick={() => {
          changeColors(currentMode);
          switchFunc();
        }}>
        {currentMode ? (
          <img
            src="images/icon-sun.svg"
            alt="button to switch from dark to light mode"
          />
        ) : (
          <img
            src="images/icon-moon.svg"
            alt="button to switch from light to dark mode"
          />
        )}
      </button>
    </header>
  );
}

function changeColors(mode) {
  let setMode
  mode? setMode = "light": setMode ="dark"
   for(const [key,value] of Object.entries(colors[setMode])) {
    document.documentElement.style.setProperty(key,value)
   }
}
