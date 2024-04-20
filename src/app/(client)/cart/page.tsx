import Link from "next/link";

import { URLS } from "@/lib/constants";

import OverallPrice from "./_components/OverallPrice/OverallPrice";
import ProductsList from "./_components/ProductsList/ProductsList";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartPage = () => {
    return (
        <Container className="pt-[75px]">
            <h2 className="text-[35px] text-darkblue uppercase">кошик</h2>
            <div className="mt-[70px] grid grid-cols-3 w-full gap-col-2">
                <div className="contents">
                    <p className="text-[17px] font-medium border-b-[1px] border-b-black pb-2">
                        Товар
                    </p>
                    <p className="text-[17px] font-medium border-b-[1px] border-b-black flex justify-end pb-2">
                        Кількість
                    </p>
                    <p className="text-[17px] font-medium border-b-[1px] border-b-black flex justify-end pb-2">
                        Всього
                    </p>
                </div>
                <ProductsList />
            </div>
            <div className="ml-auto mt-[50px] flex flex-col items-end gap-[30px] max-w-[450px] w-full">
                <OverallPrice />
                <div className="border-[1px] border-black flex w-full h-[53px] rounded-[10px] overflow-hidden">
                    <Input
                        className="border-none h-full w-1/2 py-2 px-3 text-[16px] placeholder:text-[#A1A1A1]"
                        placeholder="Ввести промокод"
                    />
                    <Button className="w-1/2 h-full bg-transparent border-l-[1px] border-l-black rounded-none text-darkblue text-[16px] hover:bg-transparent">
                        Підтвердити
                    </Button>
                </div>
                <Button className="w-full">
                    <Link
                        className="w-full h-full flex items-center justify-center"
                        href={URLS.PLACE_ORDER}
                    >
                        Оформити замовлення
                    </Link>
                </Button>
            </div>
        </Container>
    );
};

export default CartPage;
