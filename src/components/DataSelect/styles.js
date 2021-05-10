import styled from 'styled-components';

export const Container = styled.div`
  input {
     font-size: 30px;
     font-weight: 700;
     background-color: transparent;
     border: none;
     border-radius: 5px 5px 5px 5px;
     outline: none;
     padding: 0px;
     position: relative;
  }
  input::-webkit-calendar-picker-indicator {
     position: absolute;
     right: 0;

  }
`;

