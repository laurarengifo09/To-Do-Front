import { FiBell } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout, selectUser } from "../views/auth/store/userSlice";
import { Avatar, Menu, IconButton, MenuItem } from "@mui/material";
import { useState } from "react";

type Props = {
  className?: string;
};

export function Header({ className }: Props) {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      className={`flex items-center py-6 bg-white text-gray-800 ${className}`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className="flex flex-col gap-2 md:flex-grow md:justify-start">
          <span className="text-2xl font-bold">
            Hi, {user?.name} {user?.lastname}
          </span>
          <span className="text-sm">Let's finish your tasks today!</span>
        </div>
        <div className="flex items-center gap-x-10">
          <span className="text-2xl text-custom-secondary-300">
            <FiBell />
          </span>
          <IconButton onClick={(e) => setAccountMenuAnchorEl(e.currentTarget)}>
            <Avatar>{user?.name?.[0]}</Avatar>
          </IconButton>
        </div>
      </div>
      <Menu
        open={!!accountMenuAnchorEl}
        onClick={() => setAccountMenuAnchorEl(null)}
        anchorEl={accountMenuAnchorEl}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
