import questions from "../../datasets/questions";

const getIds = (max) => {
  let arr = [];
  for (let i = 0; i < max; i++) {
    let x = Math.floor(Math.random() * max) + 0;
    if (arr.includes(x) == true) {
      i = i - 1;
    } else {
      if (x > max == false) {
        arr.push(x);
      }
    }
  }
  return arr;
};

const handler = (req, res) => {
  let response = [];
  getIds(questions.math.length)
    .slice(0, 5)
    .forEach((id) => response.push(questions.math[id]));
  getIds(questions.writing.length)
    .slice(0, 5)
    .forEach((id) => response.push(questions.writing[id]));
  res.status(200).json(response);
};

export default handler;