/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { getData } from "../service";
import { GetData } from "../@types";
import { calculatePercentage } from "../utils/calculatePercentage";
import { Desktop, Mobile, Tablet } from "../icons";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { CountryFlag } from "react-countryname-flag";

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
        <CountrySection
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

interface DataSectionProps {
  title: string;
  items: { name: string; count: number }[];
}

const DataSection: React.FC<DataSectionProps> = ({ title, items }) => {
  const total = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="p-4 rounded-lg shadow-md bg-secondary">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-lg font-semibold text-text">Visitors</span>
      </div>
      <ul>
        {items
          .sort((a, b) => b.count - a.count)
          .map((item, index) => {
            let name: null | string = item.name.toLowerCase();
            let img: any | string;

            switch (name) {
              // os
              case "android os":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4425b8ae65b41da776b1d24d364f6f02_Xgx04UeAwU.png";
                name = "Android";
                break;
              case "linux":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6984223cd33751654099ea66970bcec8_kfekaJmEYO.png";
                name = "Linux";
                break;
              case "mac-os":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a1ba5ace1d63d4cf99d45e2d0ba8c7c3_low_res_Apple.png";
                name = "macOS";
                break;
              case "windows 10":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b897cb95c17c66b561f3f1054dc648fa_low_res_Windows_11_Parallels.png";
                name = "Windows 10/11";
                break;
              // browser
              case "samsung":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8d38cf21eb0825a1c9fcb4edd39d7dbe_41CQNsdTyP.png";
                name = "Samsung";
                break;
              case "chromium-webview":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b83b21d52d1f44d00520de6f9e396f3d_sjBKtSgMwR.png";
                name = "Chrome (webview)";
                break;
              case "yandexbrowser":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a7cae77c48ae88d5017964a8a38d8b50_FLrkFgdgER.png";
                name = "Yandex";
                break;
              case "opera":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/18cce2902e8a65cb51a66d93f6a9c7fa_i8GlntZO53.png";
                name = "Opera";
                break;
              case "edge-chromium":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9ebaaddcde54291b5e3608574598d347_oha7s7NpIj.png";
                name = "Edge (Chromium)";
                break;
              case "safari":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8204ffaf2c6f9f46a1a803a96c91e7d5_low_res_Safari.png";
                name = "Safari";
                break;
              case "ios":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4eeffffb168a66d18155e133397d5111_DiPPbQPhrD.png";
                name = "iOS";
                break;
              case "ios-webview":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/4eeffffb168a66d18155e133397d5111_DiPPbQPhrD.png";
                name = "iOS (webview)";
                break;
              case "chrome":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a96581679ddd7c7ae6233c04896eb339_low_res_Google_Chrome.png";
                name = "Chrome";
                break;
              case "firefox":
                img =
                  "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/578112c32e9d1f0e18de77c04e1e00ca_low_res_Firefox_Icon_Gradient_Version.png";
                name = "Firefox";
                break;
              // device type
              case "mobile":
                img = Mobile;
                name = "Mobile";
                break;
              case "desktop":
                img = Desktop;
                name = "Desktop";
                break;
              case "tablet":
                img = Tablet;
                name = "Tablet";
                break;
              default:
                img = null;
                name = null;
                break;
            }
            return (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center space-x-2 [&_img]:size-5">
                  {img && typeof img === "string" ? (
                    <img src={img} alt={item.name} />
                  ) : (
                    <div>{img}</div>
                  )}

                  <span className="text-sm font-medium">
                    {name ?? capitalizeFirstLetter(item.name)}
                  </span>
                </div>
                <span className="text-sm text-text">
                  {item.count} ({calculatePercentage(item.count, total)}%)
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
const CountrySection: React.FC<DataSectionProps> = ({ title, items }) => {
  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="p-4 rounded-lg bg-secondary">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-lg font-semibold text-text">Visitors</span>
      </div>
      <ul>
        {items
          .sort((a, b) => b.count - a.count)
          .map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center space-x-2">
                  <CountryFlag
                    countryName={item.name}
                    style={{ fontSize: "20px" }}
                  />
                  <span className="text-sm font-medium">
                    {capitalizeFirstLetter(item.name)}
                  </span>
                </div>
                <span className="text-sm text-text">
                  {item.count} ({calculatePercentage(item.count, total)}%)
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
