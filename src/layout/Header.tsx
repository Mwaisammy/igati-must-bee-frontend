import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="grid grid-cols-2  item-center justify-between bg-rose-200">
      <div className="flex justify-between item-center gap-5 bg-stone-500">
        <div>Igati Logo</div>

        <div className=" bg-amber-400">
          <h3 className="capitalize text-xl text-white p-5">
            Igati/Must one million bee hive Initiative
          </h3>
        </div>
      </div>
      <div className="bg-[#121907] flex items-center justify-center ">
        <nav className="flex gap-8">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `text-white font-normal hover:text-amber-300 transition-all .3s ease-in-out ${
                  isActive
                    ? "underline underline-offset-4 decoration-amber-300"
                    : ""
                }`
              }
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
