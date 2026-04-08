import Link from "next/link";
import { ReactNode } from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";

// import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  // const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} /> */}
          <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-indigo-400 h-15 w-15 text-5xl"
            />
          <h2 className="text-primary-100">Prep-Master</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
