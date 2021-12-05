import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Selector = () => {
  const { user } = useUser();
  return <div className="flex flex-col justify-center items-center h-screen max-h-96">
    <h1 className="text-center text-3xl font-bold">Select your role: </h1>
    <section className="flex flex-row justify-between items-center m-4">
        <Link href="app/student"><a className="m-2 flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">I&apos;m a student</a></Link>
        <Link href="app/teacher"><a className="m-2 flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">I&apos;m a teacher</a></Link>
    </section>
  </div>;
};

export const getServerSideProps = withPageAuthRequired();

export default Selector