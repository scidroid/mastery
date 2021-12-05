import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

const CompletedTest = (score) => {
  console.log(score.score);
  if (score.score < 8) {
    return (
      <div className="flex items-center justify-around h-full">
        <h1 className="text-6xl text-center font-bold text-red-600">
          Hey, try again
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-around h-full">
      <h1 className="text-6xl text-center font-bold text-green-600">
        Great! you aproved your test. let&apos;s continue to the next stage.
      </h1>
    </div>
  );
};

const Test = ({ questions }) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const handleClick = (id, correct) => {
    setCounter(counter + 1);
    if (id == correct) {
      setScore(score + 1);
    }
    console.log(score);
  };
  if (counter < 10) {
    return (
      <div>
        <h1 className="font-bold text-center text-3xl m-6">
          {questions[counter].question}
        </h1>
        <div className="flex flex-row justify-around flex-wrap items-center">
          <button
            className="block
m-4
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
            onClick={() => handleClick("a", questions[counter].correct)}
          >
            {questions[counter].answers.a}
          </button>
          <button
            className="block
            m-4 w-1/3
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
            onClick={() => handleClick("b", questions[counter].correct)}
          >
            {questions[counter].answers.b}
          </button>
          <button
            className="block
            m-4 w-1/3
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
            onClick={() => handleClick("c", questions[counter].correct)}
          >
            {questions[counter].answers.c}
          </button>
          <button
            className="block
            m-4 w-1/3
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
            onClick={() => handleClick("d", questions[counter].correct)}
          >
            {questions[counter].answers.d}
          </button>
        </div>
      </div>
    );
  }
  return <CompletedTest score={score} />;
};

export const getServerSideProps = async () => {
  withPageAuthRequired();
  const res = await fetch(process.env.AUTH0_BASE_URL + "/api/test");
  const questions = await res.json();
  return {
    props: {
      questions,
    },
  };
};

export default Test;
