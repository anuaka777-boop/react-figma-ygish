import "./App.css";
import Button from "./conplites/Button";
import Card from "./conplites/Card";

function App() {
  return (
    <div className="container">
    
      <header className="navbar">
        <h2>MyShop</h2>
        <div className="nav-links">
          <p>Bosh sahifa</p>
          <p>Mahsulotlar</p>
          <p>Aloqa</p>
        </div>
        <Button text="Kirish" rang="orange" />
      </header>

    
      <section className="hero">
        <h1>Eng sifatli texnikalar bizda</h1>
        <p>Arzon narxlar va tez yetkazib berish xizmati.</p>
        <Button text="Katalogni ko‘rish" rang="black" />
      </section>

      <section className="cards">
        <Card title="iPhone 15" 
        info="128GB, Qora rang"
         price="850$" />
        <Card title="MacBook Air"
         info="M2 chip, 8/256GB"
          price="1100$" />
        <Card title="AirPods Pro"
         info="2-avlod, oq rang" 
         price="220$" />
      </section>
    </div>
  );
}

export default App;