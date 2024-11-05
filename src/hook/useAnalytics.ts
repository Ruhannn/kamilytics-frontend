import { detect } from "detect-browser";
import { useEffect } from "react";
import { deviceType, getUserCountry } from "../utils/getUserInfo";
import { Data } from "../@types";
import { sendData } from "../service";

const useAnalytics = (path: string) => {
    useEffect(() => {
        const client = detect();
        const country = getUserCountry();

        const data: Data = {
            time: new Date().getTime(),
            page: path,
            browser: client?.name,
            os: client?.os,
            device: deviceType(),
            country: country?.name,
            timezone: country?.timezones[0],
        };
        sendData(data);
    }, [path]);
};

export default useAnalytics;
