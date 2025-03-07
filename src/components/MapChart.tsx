export default function MapChart({
  data,
}: {
  data: { country: string; count: number }[];
}) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.country} {item.count}</div>
      ))}
    </div>
);
}
