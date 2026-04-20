'use client';

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend,
} from 'recharts';

interface ChartSeries {
  key: string;
  label: string;
  color: string;
}

interface ChartProps {
  data: object[];
  type: 'bar' | 'line';
  xKey: string;
  series: ChartSeries[];
  title: string;
  subtitle?: string;
  valueSuffix?: string;
  height?: number;
}

export default function Chart({
  data,
  type,
  xKey,
  series,
  title,
  subtitle,
  valueSuffix = '',
  height = 300,
}: ChartProps) {
  const renderBars = () =>
    series.map((item) => (
      <Bar
        key={item.key}
        name={item.label}
        dataKey={item.key}
        fill={item.color}
        radius={[10, 10, 0, 0]}
      />
    ));

  const renderLines = () =>
    series.map((item) => (
      <Line
        key={item.key}
        name={item.label}
        type="monotone"
        dataKey={item.key}
        stroke={item.color}
        strokeWidth={2.5}
        dot={false}
        activeDot={{ r: 4, fill: item.color }}
      />
    ));

  return (
    <div className="card-shadow rounded-2xl border border-slate-100 bg-surface p-5">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-ink-700">{subtitle}</p> : null}
      </div>

      <ResponsiveContainer width="100%" height={height}>
        {type === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#dce7f2" />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#55718b', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#55718b', fontSize: 12 }}
              tickFormatter={(value) => `${value}${valueSuffix}`}
            />
            <Tooltip
              cursor={{ fill: '#eef4fb' }}
              contentStyle={{
                borderRadius: '0.75rem',
                border: '1px solid #d8e5f2',
                boxShadow: '0 8px 24px -20px rgba(24, 60, 92, 0.55)',
              }}
            />
            <Legend />
            {renderBars()}
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#dce7f2" />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#55718b', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#55718b', fontSize: 12 }}
              tickFormatter={(value) => `${value}${valueSuffix}`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '0.75rem',
                border: '1px solid #d8e5f2',
                boxShadow: '0 8px 24px -20px rgba(24, 60, 92, 0.55)',
              }}
            />
            <Legend />
            {renderLines()}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
