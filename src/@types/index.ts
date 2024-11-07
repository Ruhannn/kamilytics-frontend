export interface Data {
    time: number;
    page: string;
    browser?: string;
    os?: string;
    device: string;
    country?: string;
    timezone?: string;
}
export interface GetData {
    pages: { page: string; count: number }[];
    browsers: { browser: string; count: number }[];
    devices: { device: string; count: number }[];
    operatingSystems: { os: string; count: number }[];
    countries: { country: string; count: number }[];
    timezones: { timezone: string; count: number }[];
}