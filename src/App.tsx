import teploLogo from "/logo.png";
import "./App.css";
import "./mobile.css";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <>
      <header>
        <img
          className="logo-header"
          height="80px"
          width="auto"
          src={teploLogo}
          alt=""
        />
        <hr className="header-bottom"></hr>
      </header>

      <div className="cards-container">
        <ItemCard name="Ванільний гоголь-моголь" />
        <ItemCard name="Позолочений мандарин" />
        <ItemCard name="Лаванда" />
        <ItemCard name="Сантал і кокос" />
      </div>
      <footer>
        <a href="">Про нас</a>
        <a href="https://www.instagram.com/teploporuch/">Instagram</a>
      </footer>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
