import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Button from "../../utilities/Button";
import MultiLangDropdown from "../../utilities/MultiLangDropdown";
import Logo from "../../utilities/Logo";
import menuIcon from "../../../assets/icons/menu.svg";
import Container from "../../utilities/Container";

const NavBar = () => {
  const { t } = useTranslation("global");
  const links = [
    { name: t("navbar.links.0"), to: "/Med--Sal" },
    { name: t("navbar.links.1"), to: "/Med--Sal/services" },
    { name: t("navbar.links.2"), to: "/Med--Sal/about-us" },
    { name: t("navbar.links.3"), to: "/Med--Sal/contact-us" },
  ];
  const [openList, setOpenList] = useState(false);
  return (
    <Container>
      <div className="p-5">
        <div className="flex justify-between items-center border-b-2 py-2">
          <Logo />
          <ul
            className={`absolute flex flex-col items-start ps-5 shadow-md lg w-full left-0 py-5 gap-x-9 gap-y-3 z-[55] transition-all duration-300 ease-in text-myGray-600 bg-white
                                lg:static lg:flex-row lg:items-center lg:pe-0 lg:shadow-none lg:w-auto lg:h-auto lg:py-0 
                                ${openList ? " top-16 " : " top-[-490px] "}`}
          >
            {links.map((link) => (
              <NavLink to={link.to} key={link.to}>
                {link.name}
              </NavLink>
            ))}
            <li className="">
              <MultiLangDropdown />
            </li>
            <li>
              <Link to="/Med--Sal/login">
                <Button>{t("navbar.links.4")}</Button>
              </Link>
            </li>
          </ul>
          <div
            onClick={() => {
              setOpenList(!openList);
            }}
            className="lg:hidden cursor-pointer"
          >
            <img
              src={menuIcon}
              alt={"List-icon"}
              name={openList ? "close" : "menu"}
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default NavBar;
