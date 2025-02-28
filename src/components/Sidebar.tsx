import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeSlash,
  IoListOutline,
  IoPerson,
} from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "@/components";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <IoCodeSlash />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },

  {
    icon: <IoBasketOutline />,
    title: "Productos",
    path: "/dashboard/products",
  },
  {
    icon: <IoPerson />,
    title: "Perfil",
    path: "/dashboard/profile",
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const userRoles = session?.user?.roles ?? ["client"];
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="#" title="home">
            <Image
              src="/biomejs.svg"
              className="w-32"
              alt="tailus logo"
              width={150}
              height={150}
              unoptimized
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={`${session?.user?.image ?? "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"}`}
            width={150}
            height={150}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            unoptimized
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name ?? "No name"}
          </h5>
          <span className="hidden text-gray-400 lg:block">
            {userRoles.join(",")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
