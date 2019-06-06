import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import A, { CompB as B } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaSilva from "./componentes/FamiliaSilva";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from "./componentes/Contador";
import Hook from "./componentes/Hook";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numeroInicial={100} /> */}
    {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao />     */}
    {/* <Familia sobrenome="Pereira ">
      <Membro nome="Andre " />
      <Membro nome="Mariana " />
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos />*/}
    {/* <A valor="Olá eu sou A!" />
    <B valor="B na área!" /> */}
    {/* <PrimeiroComponente valor="Bom dia!" aBcD={123} />  */}
  </div>,
  elemento
);

// const jsx = <h1>Olá React!</h1>;
// ReactDOM.render(jsx, elemento);
