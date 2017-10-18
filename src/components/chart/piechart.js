import React, { Component } from 'react'
import { scaleOrdinal } from '@vx/scale';
import { LegendOrdinal } from '@vx/legend';

import { allColors } from '@data-ui/theme';
import { RadialChart, ArcSeries, ArcLabel } from '@data-ui/radial-chart';




        const colorScale = scaleOrdinal({ range: ['#a3ffe0', '#4899f1'] });
      // const data = [{ label: 'Returning Visiters', value: 200 }, { label: 'One Time Visiters', value: 150 }];
       
       export default class PieChart extends Component { 
           constructor(props) {
               super(props)
               this.state = {
                   returning: this.props.returning,
                   onetime: this.props.onetime
                }
                
            }

            componentWillReceiveProps(props) {
                this.setState = ({
                    returning: props.returning,
                    onetime: props.onetime 
                })
            }

  render(){
    const data = [{ label: 'Returning Visiters', value: +this.props.returning }, { label: 'One Time Visiters', value: this.props.onetime }];
    console.log(this.props, 'test');
  return (
    <div>
    <h4>Returning vs. One time Visiters</h4>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <RadialChart
      ariaLabel="Returning vs. One Time Visiters"
      width={500}
      height={500}
      margin={{ top: 80, right: 0, bottom: 0, left: 0 }}
      renderTooltip={({ event, datum, data, fraction }) => (
        <div>
          <strong>{datum.label}</strong>
          {datum.value} ({(fraction * 100).toFixed(2)}%)
        </div>
      )}
    >
      <ArcSeries
        data={data}
        pieValue={d => d.value}
        fill={arc => colorScale(arc.data.label)}
        stroke="#fff"
        strokeWidth={1}
        label={arc => `${(arc.data.value).toFixed(1)}`}
        labelComponent={<ArcLabel />}
        innerRadius={radius => 0.35 * radius}
        outerRadius={radius => 0.6 * radius}
        labelRadius={radius => 0.75 * radius}
      />
    </RadialChart>
    <LegendOrdinal
      direction="column"
      scale={colorScale}
      shape="rect"
      fill={({ datum }) => colorScale(datum)}
      labelFormat={label => label}

      
    />
  </div>
  </div>
); 
  }
}


