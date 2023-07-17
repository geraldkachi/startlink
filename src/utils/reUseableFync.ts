export const formatKoboAmountForDisplay = (amount: number): string => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
 };
