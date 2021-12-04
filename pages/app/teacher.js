import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const Teacher = () => {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    const resp = await fetch("api/tasks");
    const task = resp.json();
    setTasks(task);
  };
  useEffect(() => {
    getTasks();
  }, []);
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
    await fetch("api/tasks/" + id, {
      method: "delete",
    });
  };

  return (
    <>
      <h1 className="m-6 text-center font-bold text-3xl">
        Hi {user.name}!, start managing your contents
      </h1>
      <div className="flex flex-row flex-wrap">
        <section className="min-w- min-w-min flex flex-col items-center justify-center h-3/5 w-1/2">
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
              placeholder="Description"
              {...register("description", {})}
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
              <div key={key}>
                <h3>{i.name}</h3>
                <p>{i.description}</p>
                <a href={i.youtube}>Youtube Video</a>
                <button onClick={() => {deleteTask(n.key)}}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Teacher;
