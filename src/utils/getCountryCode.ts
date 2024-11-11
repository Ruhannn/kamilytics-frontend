import { country } from "../data";

export function getCountryCode(countryName: string): string {
    const code = (Object.keys(country) as Array<keyof typeof country>).find((key) =>
        country[key].toLowerCase() === countryName.toLowerCase()
    );
    return code ?? "";
}