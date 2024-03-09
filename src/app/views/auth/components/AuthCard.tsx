import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export function AuthCard(props: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      {props.children}
    </div>
  );
}
