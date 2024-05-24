import React from "react";

import { URLS } from "@/lib/constants";

import {
    ContactsForm,
    Container,
    GoogleMapComponent,
} from "@/components/shared";
import ContactsList from "@/components/shared/ContactsList/ContactsList";

const Contacts = () => {
    return (
        <Container>
            <div className="flex  flex-row justify-between p-12">
                <div className="flex flex-col gap-5">
                    <h2 className="uppercase text-[35px] text-darkblue">
                        Написати нам
                    </h2>
                    <p className="max-w-[500px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti deleniti sequi unde repellendus dignissimos sit
                        neque natus fuga officiis impedit.
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="tel:+380983995574">+380983995574</a>
                        </li>
                        <li>
                            <a
                                className="underline"
                                href="mailto:frankostore@lnu.edu.ua"
                            >
                                frankostore@lnu.edu.ua
                            </a>
                        </li>
                        <li>
                            <a
                                href={URLS.UNIVERCITY}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline"
                            >
                                {URLS.UNIVERCITY}
                            </a>
                        </li>
                    </ul>
                </div>
                <ContactsForm />
            </div>
            <div className="grid grid-cols-2 items-start justify-start px-12">
                <ContactsList />
                <GoogleMapComponent />
            </div>
        </Container>
    );
};

export default Contacts;
