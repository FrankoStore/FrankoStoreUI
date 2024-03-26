import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
    //   const { userId } = auth();

    //   if (!userId) {
    //     redirect("/sign-in");
    //   }

    //   const stores = await prismadb.store.findMany({
    //     where: {
    //       userId,
    //     },
    //   });

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
