import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface ChartData {
  date: string;
  open: number;
  resolved: number;
}

interface DoubleBarProps {
  data: ChartData[];
}

const chartConfig = {
  open: {
    label: 'Open',
    color: '#60A5FA',
  },
  resolved: {
    label: 'Resolved',
    color: '#2563EB',
  },
} satisfies ChartConfig;

export const DoubleBar: React.FC<DoubleBarProps> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[660px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => value}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="open" fill="#60A5FA" radius={4} />
        <Bar dataKey="resolved" fill="#2563EB" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
