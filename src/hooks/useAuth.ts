import { create } from "zustand";


type State = {
    count: number,
    increaseCount: () => void,
    decreaseCount: () => void,
    shippingFee: number,
    totalFee: number,
    costFee: number
}
const useAuth = create<State>((set, get) => ({
    count: 1,
    increaseCount: () => set((state) => {
        return {
            count: state.count + 1,
            totalFee: (state.count * state.costFee) + state.shippingFee
        }
    }),
    decreaseCount: () => set((state) => {
        return {
            count: state.count - 1,
            totalFee: (state.count * state.costFee) + state.shippingFee
        }
    }),
    shippingFee: 10000.00,
    costFee: 510720,
    totalFee: 10000.00 + 268584
}));

export default useAuth;
