import { useGetSettlements } from "@/services/orderService";
import { useCallback, useEffect, useState } from "react";

import { SearchDropdownItem } from "@/app/(client)/place-order/_components/search-dropdown";

export const useCities = () => {
    const [cities] = useState<SearchDropdownItem[]>([
        { label: "Львів", value: "Львів" },
    ]);
    const [city, setCity] = useState<string>("");
    const { getSettlements } = useGetSettlements();

    const changeCity = useCallback(
        (cityName: string) => {
            setCity(cityName);
        },
        [setCity],
    );

    useEffect(() => {
        getSettlements(city);
    }, [city]);

    return { cities, changeCity, city };
};
