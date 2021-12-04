import Link from "next/link"

const Student = ({ tasks }) => {
  return (
    <>
      <h1 className="m-6 text-center font-bold text-5xl">
        Hi!, these are your tasks
      </h1>
      <div className="flex justify-around flex-wrap">
        {tasks.map((i, key) => (
          <div key={key} className="m-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={
                  "https://i3.ytimg.com/vi/" +
                  i.youtube.split("https://www.youtube.com/watch?v=")[1] +
                  "/maxresdefault.jpg"
                }
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{i.name}</h2>
                <p className="text-gray-700 text-base">{i.task}</p>
              </div>
              <Link href={"/app/task/" + i.key}>
              <a className="block

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
           focus:ring-opacity-50">Go to the task</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(process.env.AUTH0_BASE_URL + "/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};

export default Student;
