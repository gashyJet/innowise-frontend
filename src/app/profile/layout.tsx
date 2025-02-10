import { Header } from "@/components/layout/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-white border-b border-gray">
        <Header />
      </div>
      <div className="lg:max-w-[1040px] lg:m-auto">{children}</div>
    </>
  );
}
