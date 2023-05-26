import { CreatePayType } from './../../types.d';
import { instance, next } from "./base";

export const createPayUrl = async (payload: CreatePayType) => {
    const { data } = await instance()
        .post(`/api/Purchase/CreatePaymentUrl`, payload)
        .catch((e) => {
            return next(e);
        });

    return data;
};
