"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { LinkButton } from "./_components/LinkButton";
import { Container } from "@/components/shared";

enum ProfileLinks {
    MyOrders = "my-orders",
    UserData = "user-data",
    DeliveryAddress = "delivery-address",
}

const baseUrl = "/user-profile";

const ProfileLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    const router = useRouter();

    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];

    return (
        <Container className="pt-[60px]">
            <h1 className="text-[35px] text-darkblue uppercase">
                особистий кабінет
            </h1>
            <div className="flex pt-[80px]">
                <div className="flex flex-col gap-3 items-start w-[350px]">
                    <LinkButton
                        isActive={lastSegment === ProfileLinks.MyOrders}
                        title="Мої замовлення"
                        onClick={() =>
                            router.push(`${baseUrl}/${ProfileLinks.MyOrders}`)
                        }
                    />
                    <LinkButton
                        isActive={lastSegment === ProfileLinks.UserData}
                        title="Дані облікового запису"
                        onClick={() =>
                            router.push(`${baseUrl}/${ProfileLinks.UserData}`)
                        }
                    />
                    <LinkButton
                        isActive={lastSegment === ProfileLinks.DeliveryAddress}
                        title="Адреси доставки"
                        onClick={() =>
                            router.push(
                                `${baseUrl}/${ProfileLinks.DeliveryAddress}`,
                            )
                        }
                    />
                    <Link href="#">Вийти</Link>
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </Container>
    );
};

export default ProfileLayout;
