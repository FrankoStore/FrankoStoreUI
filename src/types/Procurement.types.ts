export interface ICreateProcurementInformationInfo {
    amount: number;
    description: string;
    orderedDate: Date;
    productId: number;
    purchasePrice: number;
    supplierId: number;
}

export interface IProcurementInfo {
    orderedDate: Date;
    amount: number;
    description: string;
    id: number;
    purchasePrice: number;
    product: {
        id: number;
        name: string;
    };
    supplier: {
        id: number;
        companyName: string;
    };
}

export interface IUpdateProcurementInfo {
    amount?: number;
    deliveredDate?: Date;
    description?: string;
    isDelivered?: boolean;
    orderedDate?: Date;
    purchasePrice?: number;
    productId?: number;
    supplierId?: number;
}
