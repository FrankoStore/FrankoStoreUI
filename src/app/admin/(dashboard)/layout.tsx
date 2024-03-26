import Navbar from "@/components/shared/adminDashboard/navbar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const { userId } = auth();

    // if (!userId) {
    //     redirect("/sign-in");
    // }

    //   const store = await prismadb.store.findFirst({
    //     where: {
    //       id: params.storeId,
    //       userId,
    //     },
    //   });

    //   if (!store) {
    //     redirect("/");
    //   }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
