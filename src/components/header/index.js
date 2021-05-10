import React, { useState, useEffect } from 'react';
import Container from '@/components/header/styles';
import { FaChartPie } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import { format } from 'date-fns';
import DataSelect from '@/components/DataSelect'


function Header() {

   const [dataAtual, setDataAtual] = useState('');
   const [dataAtualCompleta, setDataAtualCompleta] = useState('');
   const [dataEditada, setDataEditada] = useState(true);

   useEffect(() => {
      if (dataEditada === true) {
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
         ]
   
         setDataAtualCompleta(
            `${diaSemana[diaDaSemanaNumerico]}, ${dia} de ${meses[mes]} de ${ano}`
         );
         setDataAtual(
            format(date, 'dd/MM/yyyy')
         );
      } else {
         console.log('TESTE')
      }

   }, [dataAtual])

   function ToggleDataEdit() {
      if (dataEditada === true) {
         setDataEditada(false)
      } else {
         setDataEditada(true)
      }
   }

   console.log(dataEditada)
   return (
      <Container>

         <div className="ContainerTopoEsq">
            <FaChartPie className="LogoNavDash" />
            <h1>DASHBOARD LOGÍSTICA</h1>
         </div>
         <div className="ContainerTopoDir">
            {dataEditada === true ? <h1 className="DataReduzTopo">{dataAtual}</h1> :
            <DataSelect  />}<br />
            <span className="DataCompleTopo">{dataAtualCompleta}</span>
         </div>
         {dataEditada === true ?
         <FiEdit className="LogoAltData" onClick={ToggleDataEdit} /> :
         <RiCloseCircleFill className="LogoAltData" onClick={ToggleDataEdit} />}

      </Container>
   );
}

export default Header;
