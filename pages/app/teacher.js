import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useForm } from "react-hook-form";
import { Link } from "next/link";

const Teacher = ({ tasks, submits }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await fetch("/api/tasks", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(res);
  };
  const deleteTask = async (id) => {
    await fetch("/api/tasks/" + id, {
      method: "delete",
    });
  };
  const getSubmit = (id) => {
    return submits.filter((n) => n.key == id)[0];
  };
  const SubmitButton = (id) => {
    if (getSubmit(id.id)) {
      return (
        <a
          href={getSubmit(id.id).url}
          target="_blank"
          className="block
                      w-1/3
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
          rel="noreferrer"
        >
          View submit
        </a>
      );
    } else {
      return null;
    }
  };
  console.log(tasks);
  return (
    <>
      <h1 className="m-6 text-center font-bold text-3xl">
        Hi!, start managing your contents
      </h1>
      <div className="flex flex-row flex-wrap">
        <section className="min-w- min-w-min flex flex-col items-center justify-center w-1/2">
          <h2 className="m-6 text-center font-bold text-xl">Add a task</h2>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="block
          w-full
          px-4
          py-4
          mt-2
          text-xl
          placeholder-gray-400
          bg-gray-200
          rounded-lg
          focus:outline-none
          focus:ring-4
          focus:ring-blue-600
          focus:ring-opacity-50
          "
              type="text"
              placeholder="Name"
              {...register("name", {})}
            />
            <input
              className="block
          w-full
          px-4
          py-4
          mt-2
          text-xl
          placeholder-gray-400
          bg-gray-200
          rounded-lg
          focus:outline-none
          focus:ring-4
          focus:ring-blue-600
          focus:ring-opacity-50
          "
              type="text"
              placeholder="Task activity"
              {...register("task", {})}
            />
            <input
              className="block
          w-full
          h-1/4
          px-4
          py-4
          mt-2
          text-xl
          placeholder-gray-400
          bg-gray-200
          rounded-lg
          focus:outline-none
          focus:ring-4
          focus:ring-blue-600
          focus:ring-opacity-50
          "
              type="textarea"
              placeholder="Lesson content"
              {...register("lesson", {})}
            />
            <input
              className="block
           w-full
           px-4
           py-4
           mt-2
           text-xl
           placeholder-gray-400
           bg-gray-200
           rounded-lg
           focus:outline-none
           focus:ring-4
           focus:ring-blue-600
           focus:ring-opacity-50
           "
              type="url"
              placeholder="Youtube Video"
              {...register("youtube", {})}
            />

            <input
              className=" m-2 inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
              type="submit"
            />
          </form>
        </section>
        <section className="flex flex-col items-center justify-center h-3/5 w-1/2">
          <h2 className="m-6 text-center font-bold text-xl">Current tasks</h2>
          <div>
            {tasks.map((i, key) => (
              <div className=" border-b-2 border-gray-200 p-2" key={key}>
                <h3 className="text-xl font-bold">{i.name}</h3>
                <p className="mr-6">{i.task}</p>
                <div className="flex flex-row">
                  <a
                    className="block
  w-1/3
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
                    href={i.youtube}
                  >
                    Youtube Video
                  </a>
                  <SubmitButton id={i.key} />
                  <button
                    className="block
                w-1/3
                         px-2
                         py-2
                         mt-1
                         text-xl
                         text-white
                         text-center
                         placeholder-gray-400
                         bg-red-600
                         rounded-lg
                         focus:outline-none
                         focus:ring-4
                         focus:ring-blue-600
                         focus:ring-opacity-50"
                    onClick={() => {
                      deleteTask(i.key);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  withPageAuthRequired();
  const subres = await fetch(process.env.AUTH0_BASE_URL + "/api/submit");
  const submits = await subres.json();
  const res = await fetch(process.env.AUTH0_BASE_URL + "/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
      submits,
    },
  };
};

export default Teacher;
