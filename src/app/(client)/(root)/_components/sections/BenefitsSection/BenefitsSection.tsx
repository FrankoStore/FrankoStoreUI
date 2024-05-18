import { ArrowRight } from "lucide-react";
import React from "react";

interface BenefitsSectionPropsType {
    overrideContainerStyle?: string;
}

export const BenefitsSection: React.FC<BenefitsSectionPropsType> = (props) => {
    const { overrideContainerStyle } = props;

    return (
        <div className={overrideContainerStyle}>
            <div className="flex items-center gap-[50px]">
                <ArrowRight size="70" className="stroke-darkblue" />
                <h3 className="uppercase text-[46px] lg:text-[55px] text-darkblue font-medium">
                    Отримай вигоду!
                </h3>
            </div>
            <div className="mt-[72px] lg:mt-[89px] flex">
                <div className="w-1/2 font-[200]">
                    <p>{"(система лояльності)"}</p>
                </div>
                <div className="w-1/2 font-[200] tracking-wide">
                    <p>
                        Одному купувати добре, двом – краще, а гуртом – дешевше!{" "}
                        <br />У крамничці FRANKOstore діє система лояльності для
                        покупців, яка дає можливість отримати ще більше
                        задоволення від товарів з символікою ЛНУ ім. І. Франка.{" "}
                        <br />
                        Для друзів FRANKOstore, що придбають від десяти одиниць
                        товару діє гарантована знижка від{" "}
                        <b className="font-semibold">5 до 10 %</b> в залежності
                        від категорії товару.
                    </p>
                    <p className="mt-[50px] tracking-wide">
                        Організаторам конференцій пропонуємо повний пакет
                        товарів з атрибутикою Франкового університету, а саме:
                        папки, блокноти, ручки, бейджі, дизайн та надруковану
                        програму заходу. Знижка гарантована! Також при покупці{" "}
                        <b className="font-semibold">
                            від 1000 грн – доставка безкоштовна.
                        </b>
                    </p>
                </div>
            </div>
        </div>
    );
};
