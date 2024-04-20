import { BenefitsSection, HeroSection } from "./_components/sections";
import PopularProducts from "./_components/sections/ProductSection/PopularProducts";
import RecommendedProducts from "./_components/sections/ProductSection/RecommendedProducts";
import { Container, WideContainer } from "@/components/shared";

export default function Home() {
    return (
        <>
            <WideContainer className="hero-section-height flex">
                <HeroSection />
            </WideContainer>
            <Container>
                <PopularProducts />
                <RecommendedProducts />
                <BenefitsSection overrideContainerStyle="mt-[180px]" />
            </Container>
        </>
    );
}
