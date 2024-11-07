import { useQuery } from "react-query";
import { getData } from "../service";
import { GetData } from "../@types";
import { calculatePercentage } from "../utils/calculatePercentage";



interface DataSectionProps {
  title: string;
  items: { name: string; count: number }[];
}

const DataSection: React.FC<DataSectionProps> = ({ title, items }) => {
  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="p-4 rounded-lg bg-secondary">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <ul>
        {items
          .sort((a, b) => b.count - a.count)
          .map((item, index) => (
            <li key={index} className="flex justify-between py-1">
              <span>{item.name}</span>
              <span>
                {item.count} ({calculatePercentage(item.count, total)}%)
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default function Dashboard() {
  const { data, isLoading } = useQuery<GetData>({
    queryKey: ["dashboard"],
    queryFn: getData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex flex-col w-full min-h-screen gap-4 p-6 text-text">
      <h1 className="mb-4 text-2xl font-semibold">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DataSection
          title="Pages"
          items={data.pages.map(({ page, count }) => ({ name: page, count }))}
        />
        <DataSection
          title="Browsers"
          items={data.browsers.map(({ browser, count }) => ({
            name: browser,
            count,
          }))}
        />
        <DataSection
          title="Devices"
          items={data.devices.map(({ device, count }) => ({
            name: device,
            count,
          }))}
        />
        <DataSection
          title="Operating Systems"
          items={data.operatingSystems.map(({ os, count }) => ({
            name: os,
            count,
          }))}
        />
        <DataSection
          title="Countries"
          items={data.countries.map(({ country, count }) => ({
            name: country,
            count,
          }))}
        />
      </div>
    </div>
  );
}
