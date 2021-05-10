import React, { useState, useEffect } from 'react';
import Container from '@/components/headerMobile/styles';
import { format } from 'date-fns';

function Header() {

   const [dataAtual, setDataAtual] = useState('');
   const [dataAtualCompleta, setDataAtualCompleta] = useState('');

   useEffect(() => {
      const date = new Date();
      const dia = format(date, 'dd');
      const mes = parseInt(format(date, 'MM'));
      const ano = format(date, 'yyyy');
      const diaDaSemanaNumerico = parseInt(format(date, 'i'));
      const meses = [
         '',
         'janeiro',
         'fevereiro',
         'março',
         'abril',
         'maio',
         'junho',
         'julho',
         'agosto',
         'setembro',
         'outubro',
         'novembro',
         'dezembro',
      ]

      const diaSemana = [
         'domingo',
         'segunda-feira',
         'terça-feira',
         'quarta-feira',
         'quinta-feira',
         'sexta-feira',
         'sábado',
         'domingo',
      ]

      setDataAtualCompleta(
         `${diaSemana[diaDaSemanaNumerico]}, ${dia} de ${meses[mes]} de ${ano}`
      );
      setDataAtual(
         format(date, 'dd/MM/yyyy')
      );
   }, [dataAtual])

   return (
      <Container>

         <div className="ContainerTopoEsq">
            <h1 className="TituloMobile">DASHBOARD LOGÍSTICA</h1>
         </div>
         <div className="ContainerTopoDir">
            <h1 className="DataReduzTopo">{dataAtual}</h1>
            <span className="DataCompleTopo">{dataAtualCompleta}</span>
         </div>

      </Container>
   );
}

export default Header;
