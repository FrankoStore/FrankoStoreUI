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
    };
    supplier: {
        id: number;
    };
}
