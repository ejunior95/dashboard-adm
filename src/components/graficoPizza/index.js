import React, { PureComponent } from 'react';
import {
   PieChart, Pie, Cell, Tooltip
} from 'recharts';

const COLORS = ['#27AE60', '#FF1B2D', '#F7B21E'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
   cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);
   
   return ( percent >= 0.05 ?
         <>
         <text x={x+15} y={y} fontSize='25px' fontWeight="700" fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
         </text>
         </>
         :
         <></>
      );
};

export default class Example extends PureComponent {
   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

   render() {
      return (
         <PieChart width={this.props?.width} height={this.props?.height}>
            <Pie
               data={this.props?.data}
               cx={this.props?.width / 2}
               cy={this.props?.height / 2}
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={this.props?.radius}
               dataKey="value"
            >
               {
                  this.props?.data?.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
               }
            </Pie>
            {/* <Legend iconSize={this.props?.width * 0.05} verticalAlign={'middle'} layout={"verticalAlign"} /> */}
            <Tooltip />
         </PieChart>
      );
   }
}
