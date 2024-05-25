import Script from "next/script";
import React, { useEffect, useState } from "react";

const PaymentButton = ({ html }: { html: string | undefined }) => {
    const [dangerousHtml, setDangerousHtml] = useState("");

    useEffect(() => {
        if (!html) return;
        setDangerousHtml(
            html
                .replaceAll("\\", "")
                .replace(
                    '<sdk-button label="Сплатити" background="#77CC5D" onClick="submit()"></sdk-button>',
                    '<button class="liqpay-btn" type="submit"><img src="https://static.liqpay.ua/buttons/logo-white.svg" name="btn_text" style="vertical-align: middle !important; display: inline;"><span style="vertical-align:middle; !important; margin-left: 8px !important; text-transform: uppercase;">Сплатити</span></button>',
                ),
        );
    }, [html]);
    if (!html) return null;
    return (
        <>
            <Script
                src="https://static.liqpay.ua/libjs/sdk_button.js"
                strategy="lazyOnload"
            />
            <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />
        </>
    );
};

export default PaymentButton;
