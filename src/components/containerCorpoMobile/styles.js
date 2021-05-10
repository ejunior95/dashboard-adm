import styled from 'styled-components';

const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .TituloGraficoPizza {
   display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
  }
  .TituloGraficoBarras {
   display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
  }
  .TituloGrafico {
     font-size: 150%;
  }
  .ContainerGraficos{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .ContainerPizza {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width:100%;
  }
  .ContainerBarras {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width:100%;
  }
  .ContainerPizzaLegenda {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  .Legenda1,
  .Legenda2,
  .Legenda3,
  .Legenda4 {
    height: 25px;
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
    text-align: center;
    margin-top: 10%;
    width: 100%;
    height: 20%;
  }
  .InfoAtualizacao {
    font-size: 8px;
  }
  .ContadorInfoAtualizacao {
    /* font-size: 35px; */
  }
`;

export default Container;
