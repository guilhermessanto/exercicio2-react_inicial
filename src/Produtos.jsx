import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormataPreco from "./FormataPreco";

function Produtos() {
  const [itens, setItens] = useState([]);
  useEffect(() => {
    async function getItens() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const dados = await res.json();
        setItens(dados);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    }

    getItens();
  }, []);
  console.log(itens);

  return (
    <>
      <h1>Exercício 2 </h1>
      <section>
        <ul>
          {itens.map(({ id, title, image, price }) => (
            <li key={id}>
              <p>
                <img className="foto-produto" src={image} alt="" />
              </p>
              <Link to={`/products/${id}`}>{title}</Link>
              <p>{FormataPreco(price)}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Produtos;
