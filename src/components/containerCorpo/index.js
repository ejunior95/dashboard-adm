import React, { useEffect, useState } from 'react';
import Container from './styles';
import GraficoPizza from '@/components/graficoPizza';
import GraficoBarras from '@/components/graficoBarras';
import TimerRegressivo from '@/components/timerRegressivo';
import Loader from '@/assets/loader.gif'
import api from '@/data/api';

export default function ContainerCorpo() {

   const [windowWidth,] = useState(window.innerWidth)
   const [windowHeight,] = useState(window.innerHeight)
   const [dataBarras, setDataBarras] = useState([])
   const [dataPizza, setDataPizza] = useState([])
   const [dataTotalPizza, setTotalPizza] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      recarregarDados();
   },[])

   const recarregarDados = () => {
      setIsLoading(true);

      Promise.all([
         api.get('lacres_gerados'),
         api.get('separacao_produtos'),
      ]).then(([responseBarras, responsePizza]) => {
         const {
            QTD_TOTAL,
            QTD_AUDITADO,
            QTD_ALOCADO,
            QTD_FATURADO,
            QTD_DESPACHADO,
            QTD_CARREGADO
         } = responseBarras.data.Dados
         setDataBarras([
            {
               name: 'Lacres', Unidades: QTD_TOTAL,
            },
            {
               name: 'Auditados', Unidades: QTD_AUDITADO,
            },
            {
               name: 'Alocados', Unidades: QTD_ALOCADO,
            },
            {
               name: 'Faturados', Unidades: QTD_FATURADO,
            },
            {
               name: 'Despachados', Unidades: QTD_DESPACHADO,
            },
            {
               name: 'Carregados', Unidades: QTD_CARREGADO,
            },
         ])

         const {
            QTD_CONF,
            QTD_FURO,
            QTD_ABERTO
         } = responsePizza.data.Dados
         // console.log(QTD_CONF,QTD_FURO,QTD_ABERTO)
         setDataPizza([
            { name: 'Conferidos', value: QTD_CONF},
            { name: 'Furos', value: QTD_FURO},
            { name: 'Abertos', value: QTD_ABERTO},
         ])
         
         setTotalPizza(QTD_CONF + QTD_FURO + QTD_ABERTO)
         
         setIsLoading(false)
      })
   }

   return (
      <Container>
         {
            isLoading ?
               // <span className="InfoLoader">Carregando dados...</span>
               <img src={Loader} alt="Carregando dados..." />
               : <>
               <div className="TitulosGraficos">
                  <div className="TituloGraficoPizza">
                  <span className= "TituloGrafico"><strong>Separação de produtos</strong></span>
                  </div>
                  <div className="TituloGraficoBarras">
                  <span className= "TituloGrafico"><strong>Lacres gerados</strong></span>
                  </div>
               </div>
                  <div className="ContainerGraficos">
                     <div className="ContainerPizza">
                       
                        {dataPizza.length > 0 && <GraficoPizza data={dataPizza} width={windowWidth * 0.3} height={windowHeight * 0.5} radius={windowHeight / 5} />}
                        
                        <div className="ContainerPizzaLegenda">
                           
                           <div className="ItemLegenda3">
                              <div className="Legenda3" />
                              <span className="DescLegenda3">Total ({dataTotalPizza})</span>
                           </div>

                           <div className="ItemLegenda1">
                              <div className="Legenda1" />
                              <span className="DescLegenda1">Conferidos ({dataPizza[0]?.value || 'carregando...'})</span>
                           </div>

                           <div className="ItemLegenda2">
                              <div className="Legenda2" />
                              <span className="DescLegenda2">Furos ({dataPizza[1]?.value || 'carregando...'})</span>
                           </div>

                           <div className="ItemLegenda4">
                              <div className="Legenda4" />
                              <span className="DescLegenda4">Abertos ({dataPizza[2]?.value || 'carregando...'})</span>
                           </div>

                        </div>
                     
                     </div>
                     <div className="ContainerBarras">
                        {dataBarras.length > 0 && <GraficoBarras data={dataBarras} width={windowWidth * 0.5} height={windowHeight * 0.5} />}
                     </div>
                  </div>
                  <div className="ContainerInfoAtualizacao">
                     <span className="InfoAtualizacao">A atualização do painel foi definida para a cada: <strong>02 min</strong></span><br />
                     <span className="InfoAtualizacao">Próxima atualização será executada em:</span><br />
                     <TimerRegressivo milissegundos={process.env.REACT_APP_MILISSECONDS_REFRESH} recarregarDados={recarregarDados} />
                  </div>
               </>
         }
      </Container>
   );
}
