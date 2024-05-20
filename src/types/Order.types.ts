export interface ICreateOrderInput {
    deliveryAddress: string;
    isSelfDelivery: boolean;
    products: { productId: number; quantity: number }[];
}

export interface ICreateOrderResponse {
    paymentUrl: string;
    summaryPayment: number;
}

export interface IGetWarehousesInput {
    cityName: string;
    limit: number;
    streetName: string;
}

export interface IGetStreetsInput {
    limit: number;
    settlementRef: string;
    streetName: string;
}

export interface IGetSettlementsInput {
    cityName: string;
}
