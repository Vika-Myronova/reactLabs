import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedOption: null,
  isCorrect: null,
  score: 0,

  setQuestions: (questions) =>
    set({ questions, currentQuestionIndex: 0, score: 0 }),

  selectOption: (option) => {
    const { questions, currentQuestionIndex, score } = get();
    const isCorrect = option === questions[currentQuestionIndex].answer;

    set({
      selectedOption: option,
      isCorrect,
      score: isCorrect ? score + 1 : score,
    });
  },

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedOption: null,
      isCorrect: null,
    })),

  resetQuiz: () =>
    set({
      currentQuestionIndex: 0,
      selectedOption: null,
      isCorrect: null,
      score: 0,
    }),
}));
