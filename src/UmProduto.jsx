import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import estilos from "./UmProduto.module.css";
import FormataPreco from "./FormataPreco";

const UmProduto = () => {
  const { id } = useParams();
  console.log(id);
  const [umProduto, setUmProduto] = useState([]);
  const [precoReal, setPrecoReal] = useState(0);

  useEffect(() => {
    async function getProduto() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await res.json();
        setUmProduto(dados);
        setPrecoReal(FormataPreco(umProduto.price));
        console.log(dados);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    }

    getProduto();
  }, [id, umProduto.price]);

  return (
    <>
      <section className={estilos.box}>
        <p>
          <img src={umProduto.image} alt="" />
        </p>
        <div className={estilos.descricao}>
          <h2>{umProduto.title}</h2>
          <p>{umProduto.description}</p>
          <p>{precoReal}</p>
        </div>
      </section>
    </>
  );
};

export default UmProduto;
