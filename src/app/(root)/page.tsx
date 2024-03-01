import {
    BenefitsSection,
    HeroSection,
    ProductSection,
} from "./_components/sections";
import { Container, WideContainer } from "@/components/shared";

const cards = [
    {
        id: "1",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "2",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "3",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "4",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "5",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "6",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
];

export default function Home() {
    return (
        <>
            <WideContainer className="hero-section-height flex">
                <HeroSection />
            </WideContainer>
            <Container>
                <ProductSection
                    items={cards}
                    title="популярне"
                    buttonText="Переглянути всі товари"
                    overrideContainerStyle="mt-[160px]"
                />
                <ProductSection
                    items={cards}
                    title="рекомендуємо"
                    overrideContainerStyle="mt-[160px]"
                />
                <BenefitsSection overrideContainerStyle="mt-[180px]" />
            </Container>
        </>
    );
}
