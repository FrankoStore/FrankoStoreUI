export interface ICreateOrderInput {
    deliveryAddress: string;
    isSelfDelivery: boolean;
    products: { productId: number; quantity: number }[];
}

export interface ICreateOrderResponse {
    paymentUrl: string;
    summaryPayment: number;
}

export interface IOrder {
    createdAt: Date;
    deliveryAddress: string;
    executor: null;
    isPaid: boolean;
    id: number;
    summaryPayment: number;
    status: string;
    customer: {
        email: string;
        id: number;
    };
    products: {
        id: number;
        images: {
            path: string;
            fileExtension: string;
        }[];
    }[];
}

export interface IGetOrdersOptions {
    createdAt?: Date;
    customerIds?: number[];
    executorIds?: number[];
    ids?: number[];
    isPaid?: boolean;
    skip?: number;
    statuses?: string;
    summaryPayment?: number;
    take?: number;
    updatedAt?: Date;
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

export type City = {
    Area: string;
    AreaDescription: string;
    AreaDescriptionRu: string;
    CityID: string;
    Delivery1: string;
    Delivery2: string;
    Delivery3: string;
    Delivery4: string;
    Delivery5: string;
    Delivery6: string;
    Delivery7: string;
    Description: string;
    DescriptionRu: string;
    IsBranch: string;
    PreventEntryNewStreetsUser: string;
    Ref: string;
    SettlementType: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    SpecialCashCheck: number;
};

export type Street = {
    Description: string;
    Ref: string;
    StreetsTypeRef: string;
    StreetsType: string;
};

export type Warehouse = {
    BeaconCode: string;
    BicycleParking: string;
    CanGetMoneyTransfer: string;
    CategoryOfWarehouse: string;
    CityDescription: string;
    CityDescriptionRu: string;
    CityRef: string;
    Delivery: Record<string, string>;
    DenyToSelect: string;
    Description: string; //
    DescriptionRu: string;
    Direct: string;
    DistrictCode: string;
    GeneratorEnabled: string;
    HasFittingRoom: string;
    HasMirror: string;
    InternationalShipping: string;
    Latitude: string;
    Longitude: string;
    MaxDeclaredCost: string;
    Number: string;
    OnlyReceivingParcel: string;
    POSTerminal: string;
    PaymentAccess: string;
    Phone: string;
    PlaceMaxWeightAllowed: string;
    PostFinance: string;
    PostMachineType: string;
    PostalCodeUA: string;
    ReceivingLimitationsOnDimensions: {
        Width: number;
        Height: number;
        Length: number;
    };
    Reception: Record<string, string>;
    Ref: string;
    RegionCity: string;
    Schedule: Record<string, string>;
    SelfServiceWorkplacesCount: string;
    SendingLimitationsOnDimensions: {
        Width: number;
        Height: number;
        Length: number;
    };
    SettlementAreaDescription: string;
    SettlementDescription: string;
    SettlementRef: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    SiteKey: string;
    TotalMaxWeightAllowed: string;
    TypeOfWarehouse: string;
    WarehouseForAgent: string;
    WarehouseIllusha: string;
    WarehouseIndex: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    WorkInMobileAwis: string;
};
