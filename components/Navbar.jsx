import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  const logout = router.pathname.includes("app") ? true : false;
  return (
    <header className="relative w-full px-8 text-gray-700 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link href="/">
          <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            Mastery
          </a>
        </Link>
        <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            {!logout && (
              <Link href={user ? "/app" : "/api/auth/login"}>
                <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
                  {user ? "Go to the app" : "Login to start"}
                </a>
              </Link>
            )}
            {logout && (
              <Link href="/api/auth/logout">
                <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
                  Logout
                </a>
              </Link>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;