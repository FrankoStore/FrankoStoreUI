import React from "react";

const ContactsList = () => {
    return (
        <div>
            <h3 className="text-[35px] text-primary font-bold">Контакти</h3>
            <p className="text-[22px] leading-6 mt-7 font-bold">Адресса</p>
            <address className="flex flex-col gap-1 items-start justify-center mt-4 text-base font-normal">
                <span>вул. Університетська 1,</span> <span>м. Львів</span>
                <span> 79000</span>
            </address>
            <p className="text-[22px] leading-6 mt-4 font-bold">
                Довідкове бюро Університету
            </p>
            <p className="text-base mt-4">
                тел.: <a href="tel:+38 (032) 239-41-11">+38 (032) 239-41-11</a>
            </p>
        </div>
    );
};

export default ContactsList;
