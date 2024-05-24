import { MapProvider } from "@/components/providers/map-provider";

const ContactsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <MapProvider>{children}</MapProvider>;
};

export default ContactsLayout;
