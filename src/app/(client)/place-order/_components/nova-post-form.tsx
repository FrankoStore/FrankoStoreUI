import SearchDropdown from "./search-dropdown";
import { useGetSettlements } from "@/services/orderService";
import React, { useEffect, useState } from "react";

import { cn, parseSettlements } from "@/lib/utils";

type NovaPostFormProps = {
    isDisabled: boolean;
};

const NovaPostForm = ({ isDisabled }: NovaPostFormProps) => {
    const { getSettlements, data } = useGetSettlements();
    const [cityAddresses, setCityAddresses] = useState<
        { label: string; value: string }[]
    >([]);

    useEffect(() => {
        getSettlements("Львів");
    }, []);

    useEffect(() => {
        if (!data) return;
        (async () => {
            const parsedResponse = await parseSettlements(data.getSettlements);
            setCityAddresses(parsedResponse);
        })();
    }, [data]);

    return (
        <div
            className={cn(
                "flex flex-col gap-[30px] items-start mt-[30px]",
                isDisabled ? "opacity-70" : null,
            )}
        >
            <SearchDropdown values={cityAddresses} />

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
