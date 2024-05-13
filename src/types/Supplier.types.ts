export interface ICreateSupplier {
    address: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    website: string;
}

export interface ISupplier extends ICreateSupplier {
    id: number;
}
