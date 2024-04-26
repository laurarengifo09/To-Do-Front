import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  Icon?: ReactNode;
  label: string;
};

export function CustomNavLink({ to, Icon, label }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg hover:bg-slate-100 py-2 px-4 ${
          isActive ? "bg-slate-100" : "text-custom-secondary-300"
        }`
      }
    >
      {Icon}
      <p>{label}</p>
    </NavLink>
  );
}
