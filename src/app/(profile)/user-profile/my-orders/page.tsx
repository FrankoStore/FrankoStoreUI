import { Button } from "@/components/ui/button";

const MyOrdersPage = () => {
    return (
        <div>
            <h2 className="font-medium text-[28px]">Мої замовлення</h2>
            <div className="mt-[40px] flex flex-col gap-[70px]">
                <div className="flex justify-between">
                    <div>
                        <p className="font-light text-[17px]">№ 1045</p>
                        <p className="text-[23px] mt-[11px]">1300 грн</p>
                        <div className="flex gap-6 mt-[22px]">
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-[17px] font-light">
                            20 листопада 2023
                        </p>
                        <Button>Відстежити</Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="font-light text-[17px]">№ 1045</p>
                        <p className="text-[23px] mt-[11px]">1300 грн</p>
                        <div className="flex gap-6 mt-[22px]">
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-[17px] font-light">
                            20 листопада 2023
                        </p>
                        <Button>Відстежити</Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="font-light text-[17px]">№ 1045</p>
                        <p className="text-[23px] mt-[11px]">1300 грн</p>
                        <div className="flex gap-6 mt-[22px]">
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                            <div className="w-[124px] aspect-[124/152] bg-[#F0EFEF]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <p className="text-[17px] font-light">
                            20 листопада 2023
                        </p>
                        <Button>Відстежити</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersPage;
