const Student = ({ tasks }) => {
  return (
    <>
      <h1 className="m-6 text-center font-bold text-3xl">
        Hi!, this are your tasks
      </h1>
      <div className="w-2/3 flex flex-col justify-center items-center ">
        {tasks.map((i, key) => (
          <div key={key} className="m-6">
            <h2 className="text-2xl font-bold">{i.name}</h2>
            <p>{i.description}</p>
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
                Take the test
              </a>
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
                         bg-blue-600
                         rounded-lg
                         focus:outline-none
                         focus:ring-4
                         focus:ring-blue-600
                         focus:ring-opacity-50"
                onClick={() => {
                  deleteTask(i.key);
                }}
              >
                Upload the activity
              </button>
            </div>
            <iframe
            className="m-2"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${i.youtube.split("https://www.youtube.com/watch?v=")[1]}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://mastery.scidroid.co/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};

export default Student;
