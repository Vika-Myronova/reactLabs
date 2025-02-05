import { create } from "zustand";

export const useQuizStore = create((set) => ({
  currentQuestionIndex: 0,
  selectedOption: null,
  isCorrect: null,
  score: 0,

  setSelectedOption: (option, correctAnswer) => {
    set((state) => ({
      selectedOption: option,
      isCorrect: option === correctAnswer,
      score: state.score + (option === correctAnswer ? 1 : 0),
    }));
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
