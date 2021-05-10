import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  background-color: lightgray;
  .ContainerTopoEsq {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .TituloMobile {
    font-size: 20px;
    padding-left: 10px;
  }
  .ContainerTopoDir {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
  }
  .DataReduzTopo {
    font-size: 20px;
    padding-right: 10px;
  }
  .DataCompleTopo{
    padding-right: 10px;
    font-size: 10px;
    color: gray;
  }
`;

export default Container;