export interface ICategory {
    name: string;
    id: number;
}

export interface IGetCategoriesOptions {
    ids?: number[];
    name?: string;
    startDateRange?: Date;
    endDateRange?: Date;
}
