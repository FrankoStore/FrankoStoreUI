import React from "react";

import { URLS } from "@/lib/constants";

import { Container } from "@/components/shared";

const Contacts = () => {
    return (
        <Container>
            <div className="flex  flex-row justify-between p-12">
                <div className="flex flex-col gap-3">
                    <h2 className="uppercase text-[35px] text-darkblue">
                        Написати нам
                    </h2>
                    <p className="max-w-[500px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti deleniti sequi unde repellendus dignissimos sit
                        neque natus fuga officiis impedit.
                    </p>
                    <ul className="flex flex-col gap-2">
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
                <form>form</form>
            </div>
            <div>
                <h3>Наша адреса</h3>
                <div>map</div>
                <address>вул. Університетська 1</address>
            </div>
        </Container>
    );
};

export default Contacts;
