import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  background-color: lightgray;
  .ContainerTopoEsq {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
  }
  .ContainerTopoDir {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: right;
  }
  .DataReduzTopo {
    font-size: 30px;
    padding-right: 20px;
  }
  .DataCompleTopo{
    padding-right: 20px;
    font-size: 12px;
    color: gray;
  }
  .LogoNavDash {
    font-size: 65px;
    padding-left: 20px;
    padding-right: 10px;
  }
  .LogoAltData {
    font-size: 25px;
    margin-right: 20px;
    margin-left: 5px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: .2s ease-in-out;
  }
  .LogoAltData:hover {
    cursor: pointer;
    background-color: #BABABA;
    transition: .2s ease-in-out;

   DataSelect::-webkit-datetime-edit-fields-wrapper {
      display: block;
   } 
  }
`;

export default Container;
