import logo from "./logo.svg";

function App() {
  return (
    <div>
      <header className="bg-dark-blue min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <img
          src={logo}
          className="animate-slow-spin h-40vw pointer-events-none"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-light-blue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
