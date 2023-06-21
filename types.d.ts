export interface CreatePayType{
    callBackUrl: string,
    reference: string,
    merchantId: string | number,
    description: string,
    amount: string | number
    state?: string
}
