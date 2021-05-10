import React, { PureComponent } from 'react';
import {
   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
   return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{value}</text>;
};

export default class Example extends PureComponent {
   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

   render() {
      return (
         <BarChart
            width={this.props?.width}
            height={this.props?.height}
            data={this.props?.data}
            margin={{
               top: 25, right: 30, left: 5, bottom: 0,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend iconSize={'30px'} align={'center'} width={this.props?.width} />
            <Bar dataKey="Unidades" fill="#0088FE" label={renderCustomBarLabel} />
         </BarChart>
      );
   }
}
