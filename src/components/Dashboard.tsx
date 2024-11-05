/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { getData } from "../service";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getData,
  });
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
        {data?.map((item: any, index: number) => (
          <div
            className="w-full my-auto text-center bg-gray-100 rounded-lg h-2a0 dark:bg-neutral-800 animate-pulse"
            key={index}
          >{`${index + 1}.${item.Browser}`}</div>
        ))}
      </div>
    </div>
  );
}
