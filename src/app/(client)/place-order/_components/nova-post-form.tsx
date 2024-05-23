import SearchDropdown, { SearchDropdownItem } from "./search-dropdown";
import { useGetSettlements, useGetWarehouses } from "@/services/orderService";
import React, { useEffect, useState } from "react";

import { cn, parseSettlements } from "@/lib/utils";

import { useCities } from "@/hooks/use-cities";

type NovaPostFormProps = {
    isDisabled: boolean;
};

const NovaPostForm = ({ isDisabled }: NovaPostFormProps) => {
    const { changeCity, cities, city } = useCities();
    const { data: settlements } = useGetSettlements();
    const { getWarehouses, data: warehouses } = useGetWarehouses();
    const [cityAddresses, setCityAddresses] = useState<SearchDropdownItem[]>(
        [],
    );
    const [warehousesAddresses, setWarehousesAddresses] = useState<
        SearchDropdownItem[]
    >([]);

    useEffect(() => {
        if (!settlements) return;
        (async () => {
            const parsedResponse = await parseSettlements(
                settlements.getSettlements,
            );
            setCityAddresses(parsedResponse);
        })();
    }, [settlements]);

    return (
        <div
            className={cn(
                "flex flex-col gap-[30px] items-start mt-[30px]",
                isDisabled ? "opacity-70" : null,
            )}
        >
            <SearchDropdown
                onSubmitAction={(newValue) => changeCity(newValue)}
                values={cities}
                label="Виберіть місто"
            />

            <SearchDropdown
                onSubmitAction={(newValue) => {}}
                values={cityAddresses}
                label="Виберіть населений пункт"
                disabled={!(cityAddresses.length > 0)}
            />

            {/* <NovaPostSelect
                defaultValue="Виберіть місто доставки"
                value={undefined}
                values={[]}
                loading={false}
            /> */}
            {/* <NovaPostSelect
                defaultValue="Вулиця"
                value={undefined}
                values={[]}
            />
            <NovaPostSelect
                defaultValue="Оберіть відділення"
                value={undefined}
                values={[]}
            /> */}
        </div>
    );
};

export default NovaPostForm;
