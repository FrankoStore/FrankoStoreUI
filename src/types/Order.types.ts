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

export type SettlementAddress = {
    Present: string;
    Warehouses: number;
    MainDescription: string;
    Area: string;
    Region?: string;
    SettlementTypeCode: string;
    Ref: string;
    DeliveryCity: string;
    AddressDeliveryAllowed: boolean;
    StreetsAvailability: boolean;
    ParentRegionTypes: string;
    ParentRegionCode: string;
    RegionTypes?: string;
    RegionTypesCode?: string;
};

export type IGetSettlementsResponse = {
    TotalCount: number;
    Addresses: SettlementAddress[];
};
