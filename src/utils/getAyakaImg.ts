import axios from "axios";

export const getAyakaImg = async () => {
    try {
        const res = await axios.get("https://api.waifu.im/search?included_tags=kamisato-ayaka");
        return res.data?.images[0]?.url;

    } catch (err) {
        console.error(err);
        return null;
    }
};
