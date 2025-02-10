import { Header } from "@/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-white border-b border-gray">
        <Header />
      </div>
      <div className="lg:max-w-[1040px] lg:m-auto">{children}</div>
    </>
  );
}
