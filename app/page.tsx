import Categories from "@/components/homepage/Categories";
import WebpageDisplay from "@/components/homepage/WebpageDisplay";
import { CgScreenShot } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="flex">
          <Categories showHeading={true} />
          <Categories showHeading={false} />
          <WebpageDisplay />
        </div>
      </main>
    </>
  );
}
