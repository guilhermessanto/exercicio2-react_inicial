const FormataPreco = (preco) => {
  return preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
export default FormataPreco;
