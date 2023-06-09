import {itemPrice, quantity} from "./variables";

const calculateTotal = (): number => {
    let basePrice = quantity * itemPrice;

    if (basePrice > 1000) {
        return basePrice * 0.95;
    } else {
        return basePrice * 0.98;
    }
}
