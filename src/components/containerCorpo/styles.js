import styled from 'styled-components';

const Container = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  .TitulosGraficos {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .TituloGraficoPizza {
   display: flex;
    align-items: center;
    justify-content: left;
    width:45%;
  }
  .TituloGraficoBarras {
   display: flex;
    align-items: center;
    justify-content: left;
    width:45%;
  }
  .TituloGrafico {
     font-size: 150%;
  }
  .ContainerGraficos{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .ContainerPizza {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width:45%;
  }
  .ContainerPizzaLegenda {
    height: 30%;
    width: 100%;
    transition: .5s ease-in-out;
  }
  .ItemLegenda1,
  .ItemLegenda2,
  .ItemLegenda3,
  .ItemLegenda4 {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    margin-top: 10%;
  }
  .Legenda1,
  .Legenda2,
  .Legenda3,
  .Legenda4 {
    height: 22px;
    width: 30px;
    margin-right: 5%;
  }
  .DescLegenda1 {
    color: #27AE60;
    font-weight: 600;
  }
  .Legenda1 {
    background-color: #27AE60;
  }
  .DescLegenda2 {
    color: #FF1B2D;
    font-weight: 600;
  }
  .Legenda2 {
    background-color: #FF1B2D;
  }
  .DescLegenda3 {
    color: #0D11D4;
    font-weight: 600;
  }
  .Legenda3 {
    background-color: #0D11D4;
  }
   .DescLegenda4 {
    color: #F7B21E;
    font-weight: 600;
  }
  .Legenda4 {
    background-color: #F7B21E;
  }
  .ContainerInfoAtualizacao{
    text-align: right;
    width: 97%;
    height: 13%;
  }
  .InfoAtualizacao {
    font-size: 12px;
  }
  .InfoLoader {
    font-size: 25px;
    font-weight: 600;
  }
  .ContadorInfoAtualizacao {
    font-size: 45px;
  }
`;

export default Container;
