import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  const data = [
    { id: 0, value: 10, label: 'No Production Time' },
    { id: 1, value: 15, label: 'Break Downtime' },
    { id: 2, value: 20, label: 'Planned Stop' },
    { id: 3, value: 25, label: 'Availability Loss' },
    { id: 4, value: 30, label: 'Operational Time' },
    { id: 5, value: 40, label: 'Net Production Time' },
  ];

  return (
    <PieChart
      series={[
        {
          data,
        },
      ]}
      width={500}
      height={200}
    />
  );
}
