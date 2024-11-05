import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { TbBrandTabler, TbUserBolt } from "react-icons/tb";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { Sidebar, SidebarBody, SidebarLink } from "../components/Sidebar";
import { BiHome } from "react-icons/bi";
import Dashboard from "../components/Dashboard";

export default function DashboardLayout() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <TbBrandTabler className="flex-shrink-0 w-5 h-5 text-text" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <TbUserBolt className="flex-shrink-0 w-5 h-5 text-text" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <CiSettings className="flex-shrink-0 w-5 h-5 text-text" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <BsArrowLeft className="flex-shrink-0 w-5 h-5 text-text" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-background w-full flex-1",
        "min-h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {open ? (
              <Link
                to="/"
                className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-text"
              >
                <BiHome className="flex-shrink-0 w-6 h-5 " />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium whitespace-pre "
                >
                  Kamilytics
                </motion.span>
              </Link>
            ) : (
              <Link
                to={"/"}
                className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-text"
              >
                <BiHome className="flex-shrink-0 w-6 h-5" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium whitespace-pre"
                >
                  Kamilytics
                </motion.span>
              </Link>
            )}
            <div className="flex flex-col gap-2 mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Ruhannn",
                href: "https://github.com/ruhannn",
                icon: (
                  <img
                    src="https://avatars.githubusercontent.com/u/130210417?v=4"
                    className="flex-shrink-0 rounded-full h-7 w-7"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
