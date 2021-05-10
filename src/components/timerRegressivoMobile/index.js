import React from 'react';
import Container from './styles';
import Timer from 'react-compound-timer';

function TimerRegressivo({ recarregarDados, milissegundos }) {
  return (
    <Container>
      <Timer
        initialTime={milissegundos}
        lastUnit="m"
        direction="backward"
        checkpoints={[
          {
            time: 1,
            //callback: () => window.location.reload()
            callback: () => recarregarDados()
          }
        ]}
      >
        {() => (
          <>
            <strong>
              <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />:<Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />
            </strong>
          </>
        )}
      </Timer>
    </Container>
  );
}

export default TimerRegressivo;
