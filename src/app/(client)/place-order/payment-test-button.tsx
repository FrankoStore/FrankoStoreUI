import { useCreateorder } from "@/services/orderService";
import Script from "next/script";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const PaymentTestButton = () => {
    const { createOrder, data } = useCreateorder();
    const [dangerousHtml, setDangerousHtml] = useState("");

    useEffect(() => {
        if (!data) return;
        setDangerousHtml(
            data.paymentUrl
                .replaceAll("\\", "")
                .replace(
                    '<sdk-button label="Сплатити" background="#77CC5D" onClick="submit()"></sdk-button>',
                    '<button class="liqpay-btn" type="submit"><img src="https://static.liqpay.ua/buttons/logo-white.svg" name="btn_text" style="vertical-align: middle !important; display: inline;"><span style="vertical-align:middle; !important; margin-left: 8px !important; text-transform: uppercase;">Сплатити</span></button>',
                ),
        );
    }, [data]);

    return (
        <>
            <Button
                onClick={() =>
                    createOrder({
                        deliveryAddress: "Львів",
                        isSelfDelivery: true,
                        products: [{ productId: 8, quantity: 2 }],
                    })
                }
            >
                PaymentTestButton
            </Button>
            <Script
                src="https://static.liqpay.ua/libjs/sdk_button.js"
                strategy="lazyOnload"
            />
            <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />
        </>
    );
};

export default PaymentTestButton;
