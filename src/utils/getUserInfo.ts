import moment from "moment-timezone";
import { getCountryForTimezone } from "countries-and-timezones";

export const getUserCountry = () => {
    return getCountryForTimezone(moment.tz.guess());
};

export const deviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)
            ? 'Tablet'
            : 'Desktop';

