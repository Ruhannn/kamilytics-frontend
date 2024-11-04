import axios from "axios"
import { toast } from "sonner"

export const sendMessage = (message: string) => {
    if (!message) {
        console.error("cannot send an empty message")
        return
    }
    const text = { content: message }
    axios.post(import.meta.env.VITE_WEBHOOK, text)
        .then(() => {
            toast.success("send message😊")
        }).catch((err) => {
            console.error(err.message);
        })
}