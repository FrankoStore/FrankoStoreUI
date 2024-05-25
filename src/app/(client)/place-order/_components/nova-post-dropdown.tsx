import SearchDropdown, { SearchDropdownItem } from "./search-dropdown";
import {
    useGetCities,
    useGetCitiesStreets,
    useGetWarehouses,
} from "@/services/orderService";
import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

import { parseCities, parseStreets, parseWarehouses } from "@/lib/utils";

import { useOrder } from "@/hooks/use-active-order";

export default function NovaPostDropdown() {
    const [cityQuery, setCityQuery] = useState("");
    const [streetQuery, setStreetQuery] = useState("");
    const [activeCity, setActiveCity] = useState<SearchDropdownItem>();
    const [activeStreet, setActiveStreet] = useState<SearchDropdownItem>();
    const [cities, setCities] = useState<SearchDropdownItem[]>([]);
    const [streets, setStreets] = useState<SearchDropdownItem[]>([]);
    const [warehouses, setWarehouses] = useState<SearchDropdownItem[]>([]);
    const { data: citiesData, getCities } = useGetCities();
    const { data: streetsData, getStreets } = useGetCitiesStreets();
    const { data: warehousesData, getWarehouses } = useGetWarehouses();
    const { updateDeliveryAddress } = useOrder();

    useEffect(() => {
        getCities(cityQuery);
    }, [cityQuery]);

    useEffect(() => {
        if (!activeCity) return;
        getStreets(activeCity?.value, streetQuery);
    }, [streetQuery, activeCity]);

    useEffect(() => {
        if (!activeCity || !activeStreet) return;
        getWarehouses({
            cityName: activeCity.label,
            limit: 50,
            streetName: activeStreet.label,
        });
    }, [activeStreet]);

    useEffect(() => {
        if (!citiesData) return;
        (async () => {
            const res = await parseCities(citiesData.getCities);
            setCities(res);
        })();
    }, [citiesData]);

    useEffect(() => {
        if (!streetsData) return;
        (async () => {
            const res = await parseStreets(streetsData.getCityStreets);
            setStreets(res);
        })();
    }, [streetsData]);

    useEffect(() => {
        if (!warehousesData) return;
        (async () => {
            const res = await parseWarehouses(warehousesData.getWarehouses);
            setWarehouses(res);
        })();
    }, [warehousesData]);

    return (
        <>
            <SearchDropdown
                values={cities}
                onInputChange={throttle(
                    (value: string) => setCityQuery(value),
                    1000,
                )}
                onSubmitAction={(city) => setActiveCity(city)}
                label="Оберіть місто"
            />

            <SearchDropdown
                values={streets}
                onInputChange={throttle(
                    (value: string) => setStreetQuery(value),
                    1000,
                )}
                onSubmitAction={(street) => setActiveStreet(street)}
                label="Оберіть вулицю"
            />

            <SearchDropdown
                values={warehouses}
                onSubmitAction={(warehouse) =>
                    updateDeliveryAddress(
                        `${activeCity?.label}, ${warehouse.label}`,
                    )
                }
                label="Оберіть відділення"
            />
        </>
    );
}
