import { useEffect, useRef, useState } from "react";
import {
  SearchNormal1,
  Notification,
  More,
  HambergerMenu,
  CloseSquare,
  User,
  Setting2,
  Wallet3,
  Logout,
  ArrowDown3,
  ArrowRotateRight,
} from "iconsax-react";
import { ArrowDown, ArrowDown2 } from "iconsax-reactjs";

type NavItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href: string;
  icon: typeof User;
  danger?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Market", href: "/market" },
  { label: "Asset", href: "/asset" },
  { label: "Statistic", href: "/statistic" },
  { label: "Community", href: "/community" },
];

const MENU_ITEMS: MenuItem[] = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Wallet", href: "/wallet", icon: Wallet3 },
  { label: "Settings", href: "/settings", icon: Setting2 },
  { label: "Log out", href: "/logout", icon: Logout, danger: true },
];

const USER = {
  name: "Jackie Brad",
  email: "jackie23@gmail.com",
  avatar: "https://i.pravatar.cc/100?img=12",
};

const iconButton =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full  text-gray-900 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:h-[52px] sm:w-[52px]";

export default function Navbar() {
  const [active, setActive] = useState<string>("Dashboard");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Overlay: dims + blurs the page behind the mobile menu */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <header className="fixed inset-x-0 top-0 z-40 w-full bg-[#f6f7f9] p-2 sm:p-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 rounded-full bg-white p-2 sm:gap-4 sm:p-3">
          {/* Logo */}
          <a
            href="/"
            aria-label="PopTrade home"
            className="flex h-11 shrink-0 items-center rounded-full bg-[#f6f7f9] px-4 text-base font-bold tracking-tight sm:h-[52px] sm:px-6 sm:text-lg"
          >
            <span className="text-blue-600">Pop</span>
            <span className="text-gray-900">Trade</span>
            <span
              aria-hidden="true"
              className="mb-3 ml-0.5 h-1.5 w-1.5 rounded-full bg-blue-600"
            />
          </a>

          {/* Primary navigation (desktop) */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full bg-[#f6f7f9] px-3">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.label;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => handleNavClick(e, item.label)}
                      className={`flex h-[52px] items-center px-5 text-sm transition ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions + profile */}
          <section
            aria-label="User actions"
            className="ml-auto flex items-center gap-2 sm:gap-3"
          >
            <button
              type="button"
              aria-label="Search"
              className={`${iconButton} hidden sm:flex`}
            >
              <SearchNormal1 size={20} color="currentColor" />
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className={iconButton}
            >
              <Notification size={20} color="currentColor" />
            </button>

            {/* Profile + dropdown */}
            <div ref={menuRef} className="relative">
              <article className="flex h-11 items-center gap-2 rounded-full bg-[#f6f7f9] pl-1 pr-3 sm:h-[52px] sm:gap-3 sm:pr-5">
                <img
                  src={USER.avatar}
                  alt={`${USER.name} avatar`}
                  className="h-9 w-9 rounded-full object-cover sm:h-[46px] sm:w-[46px]"
                />
                <div className="hidden min-w-0 leading-tight md:block">
                  <p className="text-sm font-medium text-gray-900">
                    Hi, {USER.name}!
                  </p>
                  <p className="truncate text-xs text-gray-400">{USER.email}</p>
                </div>
                <button
                  type="button"
                  aria-label="More options"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  className="ml-1 rounded-full text-gray-900 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <ArrowDown2 size={20} color="currentColor" />
                </button>
              </article>

              {menuOpen && (
                <div
                  role="menu"
                  aria-label="Account menu"
                  className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-3xl border border-gray-100 bg-white p-2"
                >
                  {/* Shown on small screens where the greeting is hidden */}
                  <header className="mb-1 border-b border-gray-100 px-3 py-3 md:hidden">
                    <p className="text-sm font-medium text-gray-900">
                      Hi, {USER.name}!
                    </p>
                    <p className="truncate text-xs text-gray-400">
                      {USER.email}
                    </p>
                  </header>

                  <ul>
                    {MENU_ITEMS.map(({ label, href, icon: Icon, danger }) => (
                      <li key={label} role="none">
                        <a
                          role="menuitem"
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition hover:bg-[#f6f7f9] ${
                            danger ? "text-red-600" : "text-gray-900"
                          }`}
                        >
                          <Icon size={18} color="currentColor" />
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className={`${iconButton} lg:hidden`}
            >
              {mobileOpen ? (
                <CloseSquare size={20} color="currentColor" />
              ) : (
                <HambergerMenu size={20} color="currentColor" />
              )}
            </button>
          </section>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="mx-auto mt-2 max-w-[1400px] rounded-3xl bg-white p-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.label;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => handleNavClick(e, item.label)}
                      className={`flex items-center rounded-2xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-[#f6f7f9] text-blue-600"
                          : "text-gray-900 hover:bg-[#f6f7f9]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="sm:hidden">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-gray-900 hover:bg-[#f6f7f9]"
                >
                  <SearchNormal1 size={18} color="currentColor" />
                  Search
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Spacer: reserves the navbar's height since fixed removes it from the flow */}
      <div aria-hidden="true" className="h-[76px] sm:h-[108px]" />
    </>
  );
}