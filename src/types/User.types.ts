export interface IRegisterUserType {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
}

export interface ILoginUserType {
    login: string;
    password: string;
}

export interface IDiscountType {
    id: number;
    name: string;
    percentage: number;
}

export interface IUserDataType extends Omit<IRegisterUserType, "password"> {
    id: number;
    discountType: IDiscountType | null;
    roles: { id: number; name: string }[];
}

export interface IResetPasswordInput {
    oldPassword: string;
    newPassword: string;
}
