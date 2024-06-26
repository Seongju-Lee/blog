import Link from "next/link";
import { Button } from "../ui/button";
import Search from "../ui/search";
import Text from "../ui/text";
import { useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/libs/utils";

const menus = [
  { name: "Posts", href: "/posts" },
];

function Header() {
  const [searchMode, setSearchMode] = useState(false);
  const { asPath } = useRouter();

  return (
    <div className="flex items-center justify-between py-3">
      <Link
        href={"/"}
        className="sm:text-2xl text-lg font-semibold tracking-tight"
      >
        Seongju
      </Link>
      {searchMode && <Search />}
      <div className="flex items-center gap-2">
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href}>
            <Button size="icon" variant="ghost" className="w-fit px-2.5 py-2">
              <Text
                variant="p"
                className={cn(
                  "text-gray-500 font-normal",
                  asPath === menu.href && "text-black"
                )}
              >
                {menu.name}
              </Text>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
