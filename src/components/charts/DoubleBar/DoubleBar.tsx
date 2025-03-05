import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const OPEN_COLOR = '#ffba00';
const RESOLVED_COLOR = '#74d4ff';

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
    color: OPEN_COLOR,
  },
  resolved: {
    label: 'Resolved',
    color: RESOLVED_COLOR,
  },
} satisfies ChartConfig;

export const DoubleBar: React.FC<DoubleBarProps> = ({ data }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[60%] w-[80%] place-self-center"
    >
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
        <Bar dataKey="open" fill={OPEN_COLOR} radius={4} />
        <Bar dataKey="resolved" fill={RESOLVED_COLOR} radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
