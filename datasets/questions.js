const questions = {
    math: [
      {
        id: "m_1",
        question:
          "The mean number of students per classroom, y, at Central High School can be estimated using the equation y = 0.8636x + 27.227, where x represents the number of years since 2004 and x is less or equal than 10. Which of the following statements is the best interpretation of the number 0.8636 in the context of this problem?",
        answers: {
          a: "The estimated mean number of students per classroom in 2004",
          b: "The estimated mean number of students per classroom in 2014",
          c: "The estimated yearly decrease in the mean number of students per classroom",
          d: "The estimated yearly increase in the mean number of students per classroom",
        },
        correct: "d",
        difficulty: "easy",
      },
      {
        id: "m_2",
        question: "If a^2 + 14a = 51 and a > 0, what is the value of a+7?",
        answers: {
          a: "100",
          b: "10",
          c: "3",
          d: "8",
        },
        correct: "b",
        difficulty: "easy",
      },
      {
        id: "m_3",
        question:
          "The graph of y = (2x - 4)(x-4) is a parabola in the xy-plane. In which of the following equivalent equations do the x- and y-coordinates of the vertex of the parabola appear as constants or coefficients?",
        answers: {
          a: "y = (2x - 3)^2 + (-2)",
          b: "y = (x - 2)(2x - 8)",
          c: "y = (2x - 3)2 - 2",
          d: "y = (2x - 3) - 2",
        },
        correct: "a",
        difficulty: "hard",
      },
      {
        id: "m_3",
        question: "Which of the following is equal to (14 - 2i)(7 - 12i)? ",
        answers: {
          a: "74",
          b: "122",
          c: "74 + 154i",
          d: "122 + 154i",
        },
        correct: "d",
        difficulty: "hard",
      },
      {
        id: "m_4",
        question: "If 1/2x + 1/3y = 4, what is the value of 3x + 2y?",
        answers: {
          a: "24",
          b: "6",
          c: "12",
          d: "3",
        },
        correct: "a",
        difficulty: "easy",
      },
      {
        id: "m_5",
        question: "Which of the following is equal to sin(π/5)",
        answers: {
          a: "-cos(π/5)",
          b: "-sin(π/5)",
          c: "cos(3π/10)",
          d: "sin(7π/10)",
        },
        correct: "c",
        difficulty: "hard",
      },
      {
        id: "m_6",
        question:
          "x^2 + y^2 - 6x + 8y = 144. Given this equation, which represents a circle in the xy-axis, what is the diameter of the circle?",
        answers: {
          a: "26",
          b: "13",
          c: "6",
          d: "12",
        },
        correct: "a",
        difficulty: "hard",
      },
    ],
    writing: [
      {
        id: "w_1",
        question:
          "A subway system is expanded to provide service to a growing suburb. A bike-sharing program is adopted to encourage nonmotorized transportation. *To alleviate rush hour traffic jams in a congested downtown area, stoplight timing is coordinated*. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "Coordinating stoplight timing can help alleviate rush hour traffic jams in a congested downtown area.",
          c: "Stoplight timing is coordinated to alleviate rush hour traffic jams in a congested downtown area.",
          d: "In a congested downtown area, stoplight timing is coordinated to alleviate rush hour traffic jams.",
        },
        correct: "c",
        difficulty: "easy",
      },
      {
        id: "w_2",
        question:
          "When any one of these changes *occur, it is* likely the result of careful analysis conducted by transportation planners. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "occur, they are",
          c: "occurs, they are",
          d: "occurs, it is",
        },
        correct: "d",
        difficulty: "hard",
      },
      {
        id: "w_3",
        question:
          "The work of transportation planners generally includes evaluating current transportation needs, assessing the effectiveness of existing facilities, and improving those facilities or *they design* new ones. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "to design",
          c: "designing",
          d: "design",
        },
        correct: "c",
        difficulty: "easy",
      },
      {
        id: "w_4",
        question:
          "Most transportation planners work in or near cities, but some are employed in rural areas. Pick the option that has the most effective transition from the information in the previous sentence.",
        answers: {
          a: "NO TRANSITION",
          b: ", where job opportunities are more painful.",
          c: ", and most of them are employed by government agencies.",
          d: ", where there are less job opportunities.",
        },
        correct: "a",
        difficulty: "easy",
      },
      {
        id: "w_5",
        question:
          "The transportation *planner’s job,* might involve conducting a traffic count to determine the daily number of vehicles traveling on the road to the new factory. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "planner's job",
          c: "planners job,",
          d: "planners' job",
        },
        correct: "b",
        difficulty: "hard",
      },
      {
        id: "w_6",
        question:
          "*People who pursue careers in transportation planning* have a wide variety of educational backgrounds. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "People, who pursue careers in transportation planning,",
          c: "People who pursue careers, in transportation planning,",
          d: "People who pursue careers in transportation planning,",
        },
        correct: "a",
        difficulty: "easy",
      },
      {
        id: "w_7",
        question:
          "A crowd of admiring spectators *watched* as Kingman squeezes dollops of paint from several tubes into a tin watercolor. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "had watched",
          c: "watches",
          d: "would watch",
        },
        correct: "c",
        difficulty: "easy",
      },
      {
        id: "w_8",
        question:
          "The name Kingman was selected for its two *parts, “king” and “man”*. Pick the option that maintains the best sentence pattern when replacing the text surrounded by * in the previous paragraph.",
        answers: {
          a: "NO CHANGE",
          b: "parts: “king“ and “man“ ",
          c: "parts “king“ and “man“",
          d: "parts; “king“ and “man“",
        },
        correct: "b",
        difficulty: "easy",
      },
    ],
  };
  
  export default questions;