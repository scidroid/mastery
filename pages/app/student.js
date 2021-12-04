import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

const Student = () => {
  const { user } = useUser();
  return (
    <>
      <h1 className="m-6 text-center font-bold text-3xl">Hi {user.name}!, you are a student</h1>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Student;
