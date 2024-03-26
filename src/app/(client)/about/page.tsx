import Image from "next/image";

import {
    AboutCarousel,
    CarouselItemPropsType,
} from "./_components/AboutCarousel";
import { Container } from "@/components/shared";

import aboutImg from "@public/aboutUs.png";

const sliderItems: CarouselItemPropsType[] = [
    {
        title: "ідентифікаційна",
        description:
            "допомогти виділити з громади людей, які ідентифікують себе з університетом",
    },
    {
        title: "виховна",
        description:
            "популяризувати університет як сучасний науково-освітній центр",
    },
    {
        title: "емоційна",
        description:
            "демонструвати гордість за свій навчальний заклад та зберегти приємні спогади про час проведений в університеті",
    },
    {
        title: "подарункова",
        description:
            "продукція крамнички буде використана в якості сувеніру для гостей університету",
    },
    {
        title: "екологічна",
        description: "у асортименті передбачена  еко-лінійка продукції",
    },
];

const AboutPage = () => {
    return (
        <div className="pt-[87px]">
            <Container className="flex flex-col items-center">
                <h1 className="text-[55px] text-center max-w-[1132px] text-darkblue">
                    Вас вітає FRANKOstore – офіційна крамничка з брендованою
                    продукцією ЛНУ ім. І. Франка!
                </h1>
            </Container>
            <Container className="flex justify-between items-center pt-[87px]">
                <div className="max-w-[644px] text-[17px]">
                    <p>
                        Ідея крамнички зародилася у нашому університеті вже
                        досить давно.
                    </p>
                    <p className="mt-5">
                        Студенти завжди прагнули показати свою приналежність до
                        Франкового університету різними способами. Окремі групи,
                        курси, факультети замовляли брендові речі у різних фірм
                        та дизайнерів, проте робили це надзвичайно хаотично.
                        Саме тому група ентузіастів вирішила створити
                        FrankoStore для того, щоб скоординувати цей процес,
                        уніфікувати дизайн замовлень, зробити продукцію з
                        атрибутикою ЛНУ ім. І.Франка доступною для купівлі прямо
                        у стінах університету та через Інтернет.
                    </p>
                    <p className="mt-5">
                        Мета – створити грантовий фонд із прибутку крамнички для
                        фінансування студентських проектів.
                    </p>
                </div>
                <div className="max-w-[532px] w-full h-auto">
                    <Image
                        className="w-full object-cover"
                        src={aboutImg}
                        alt="About"
                    />
                </div>
            </Container>
            <Container>
                <AboutCarousel
                    items={sliderItems}
                    overrideContainerStyle="pt-[130px]"
                />
            </Container>
            <Container className="pt-[150px] flex justify-between items-center">
                <div className="max-w-[645px] w-full aspect-[645/351] bg-[#D9D9D9]" />
                <div className="max-w-[550px] w-full">
                    <div>
                        <p className="uppercase text-[35px] text-darkblue">
                            Наш асортимент:
                        </p>
                        <p className="text-[14px] mt-4 max-w-[400px]">
                            У крамничці ви можете знайти для себе товари як з
                            традиційною атрибутикою ЛНУ ім. І.Франка, так і
                            унікальні дизайнерські колекції.
                        </p>
                    </div>
                    <div className="mt-7">
                        <p className="uppercase text-[35px] text-darkblue">
                            У нас ви можете придбати:
                        </p>
                        <ul className="text-[14px] mt-4 list-disc ml-[16px]">
                            <li>стильний та зручний одяг;</li>
                            <li>оригінальне канцелярське приладдя;</li>
                            <li>унікальний посуд;</li>
                            <li>цікаві аксесуари;</li>
                            <li>екотовари.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutPage;
