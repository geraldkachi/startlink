import axios, { AxiosError } from "axios";
import { toast } from 'react-toastify';

const BACKEND_URL = import.meta.env.VITE_API_KEY

export const instance = () => {
    const instanceHttp = axios.create({
        baseURL: BACKEND_URL,
        timeout: 50000,
        headers: {
            "Content-Type": "application/json",
            // 'x-ApiKey': 'TEST_API_KEY',
            'x-ApiKey': '9e6395deae0648c2baf823e64799e6dd',
        },
    });
    return instanceHttp
}

export const next = (e: AxiosError | any) => {
    console.error(e, 'error')
    if (e?.response?.data?.message === "jwt expired") {
        toast.info("Logging you out!");
        setTimeout(() => {
            window.location.replace("/");
            localStorage.clear();
        }, 3000);
    }
    throw new Error(
        e.response ?
            (e.response.data.message || e?.message)
            :
            toast.error("Something Went Wrong!")
    );
};
