export type NavbarTab = {
  title: string;
  href: string;
  id: number;
};

export const NavbarTabsData: NavbarTab[] = [
  {
    title: "главная",
    href: "/",
    id: 1,
  },
  {
    title: "категории",
    href: "/categories",
    id: 2,
  },
  {
    title: "профиль",
    href: "/profile",
    id: 3,
  },
  {
    title: "админ-панель",
    href: "/dashboard",
    id: 4,
  },
];
