import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Updated dataset with percentage values and hour labels
export const dataset = [
  {
    performance: 10,
    hour: '1',
  },
  {
    performance: 20,
    hour: '2',
  },
  {
    performance: 30,
    hour: '3',
  },
  {
    performance: 50,
    hour: '4',
  },
  {
    performance: 40,
    hour: '5',
  },
  {
    performance: 60,
    hour: '6',
  },
  {
    performance: 70,
    hour: '7',
  },
  {
    performance: 80,
    hour: '8',
  },
  {
    performance: 90,
    hour: '9',
  },
];

const chartSetting = {
  yAxis: [
    {
      label: 'Percentage (%)',
      min: 0,
      max: 100,
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}%`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'hour' }]}
      series={[
        { dataKey: 'performance', label: 'Performance', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
