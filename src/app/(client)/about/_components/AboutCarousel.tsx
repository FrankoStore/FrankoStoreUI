import { cn } from "@/lib/utils";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export interface CarouselItemPropsType {
    title: string;
    description: string;
    overrideContainerStyle?: string;
    overrideSlideStyle?: string;
}

interface AboutCarouselPropsType {
    items: CarouselItemPropsType[];
    overrideContainerStyle?: string;
}

const AboutCarouselItem: React.FC<CarouselItemPropsType> = (props) => {
    const { title, description, overrideContainerStyle, overrideSlideStyle } =
        props;

    return (
        <CarouselItem className={overrideSlideStyle}>
            <div
                className={cn(
                    "border-[1px] border-darkblue rounded-[31px]",
                    overrideContainerStyle,
                )}
            >
                <div className="border-b-[1px] border-darkblue">
                    <p className="pt-[31px] pb-[15px] px-[18px] text-[24px] text-darkblue uppercase">
                        {title}
                    </p>
                </div>
                <div className="pt-[10px] px-[18px] pb-[10px] h-[118px]">
                    <p className="text-[14px] lowercase">{description}</p>
                </div>
            </div>
        </CarouselItem>
    );
};

export const AboutCarousel: React.FC<AboutCarouselPropsType> = (props) => {
    const { items, overrideContainerStyle } = props;

    return (
        <Carousel
            opts={{ slidesToScroll: 2, duration: 10 }}
            className={cn(overrideContainerStyle)}
        >
            <div className="flex justify-between items-center max-w-[1250px] mx-auto">
                <p className="text-[25px] text-darkblue uppercase">
                    цілі frankostore:
                </p>
                <div className="flex gap-5 items-center">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                </div>
            </div>
            <CarouselContent className="gap-[33px] mt-[40px]">
                {items.map((item, index) => {
                    const key = `${item.title}-${index}`;

                    return (
                        <AboutCarouselItem
                            title={item.title}
                            description={item.description}
                            overrideSlideStyle="max-w-[338px]"
                            key={key}
                        />
                    );
                })}
            </CarouselContent>
        </Carousel>
    );
};
