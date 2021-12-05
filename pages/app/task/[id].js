import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Task = ({ task }) => {
  console.log(task);
  return (
    <>
      <h1 className="text-3xl font-bold text-center m-6">{task.name}</h1>
      <section className="flex flex-wrap justify-around">
        <p className=" w-2/5 text text-lg">{task.lesson}</p>
        <section className="w-2/5">
          <iframe
            className="w-full h-96"
            src={`https://www.youtube-nocookie.com/embed/${
              task.youtube.split("https://www.youtube.com/watch?v=")[1]
            }`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h2 className="text-center text-3xl font-bold m-6">Task</h2>
          <p className="text-center text-xl font-semibold">{task.task}</p>
          <a
            className="block

px-2
py-2
mt-1
mr-2
text-xl
text-white
text-center
placeholder-gray-400
bg-blue-600
rounded-lg
focus:outline-none
focus:ring-4
focus:ring-blue-600
focus:ring-opacity-50"
          >
            Submit the activity
          </a>
          <Link href="/app/test">
            <a
              className="block

px-2
py-2
mt-1
mr-2
text-xl
text-white
text-center
placeholder-gray-400
bg-blue-600
rounded-lg
focus:outline-none
focus:ring-4
focus:ring-blue-600
focus:ring-opacity-50"
            >
              Take the test
            </a>
          </Link>
        </section>
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  withPageAuthRequired()
  const res = await fetch(process.env.AUTH0_BASE_URL + "/api/tasks");
  const tasks = await res.json();
  const { id } = context.query;
  const task = tasks.filter((n) => n.key === id)[0];

  return {
    props: {
      task,
    },
  };
};

export default Task;
