/** @format */
"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ShimmerButton } from "../shimmer-btn";
import UserTabs from "../tabs/user-toggle-tab";
import { Logo } from "../logo";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    { id: "landing", label: "Home", path: "/landing" },
    { id: "templates", label: "Templates", path: "/templates" },
    { id: "features", label: "Features", path: "/features" },
    { id: "faq", label: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) =>
        pathname === tab.path ||
        (tab.path !== "/" && pathname.startsWith(tab.path))
    );
    if (activeIndex !== -1) {
      setSelectedIndex(activeIndex);
    }
  }, [pathname]);

  const handleTabChange = (tabId: string) => {
    router.push(tabId);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <section className="flex justify-between items-center max-w-screen-custom px-4 mx-auto py-4 h-16">
        <div className="">
          <Logo />
        </div>
        <div className="w-1/3 mx-auto">
          <UserTabs
            tabs={tabs}
            selectedTabIndex={selectedIndex}
            onTabClick={setSelectedIndex}
            onChange={handleTabChange}
            classNames="w-full h-10"
          />
        </div>
        <div>
          <ShimmerButton
            background="#1f1f1f"
            borderRadius="40px"
            className="h-10 w-36 shadow-md pt-0 py-0 m-0 my-0"
            onClick={() => router.push("/auth/register")}
          >
            <p className="text-sm font-medium">Get Started Free</p>
          </ShimmerButton>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
