import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-gray-200">
      <div className="grid md:grid-cols-3 lg:grid-cols-6 w-full items-start">
        <Sidebar className="row-span-12" />
        <Header className="md:col-span-2 lg:col-span-5 px-10" />
        <div className="row-span-11 md:col-span-2 lg:col-span-5 px-10">{children}</div>
      </div>
    </div>
  );
}
