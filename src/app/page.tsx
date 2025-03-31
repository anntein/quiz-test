'use client';

import { useState } from 'react';
import HomeView from '../components/HomeView';
import QuestionView from '../components/QuestionView';
import ResultsView from '../components/ResultsView';
import { QuizState } from '@/lib/types';
import { getQuestions } from '@/lib/questions';

type View = 'home' | 'question' | 'results';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: [],
    score: 0,
  });

  const startQuiz = async () => {
    try {
      const questions = await getQuestions();
      setQuizState({
        currentQuestionIndex: 0,
        questions,
        userAnswers: [],
        score: 0,
      });
      setView('question');
    } catch (error) {
      console.error('Failed to start quiz:', error);
      alert('Failed to load questions. Please try again.');
    }
  };

  const handleAnswer = (answerId: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswerId === answerId;
    
    const newState = {
      ...quizState,
      userAnswers: [...quizState.userAnswers, answerId],
      score: isCorrect ? quizState.score + 1 : quizState.score,
      currentQuestionIndex: quizState.currentQuestionIndex + 1,
    };
    
    setQuizState(newState);

    if (newState.currentQuestionIndex >= quizState.questions.length) {
      setView('results');
    }
  };

  const returnHome = () => {
    setView('home');
    setQuizState({
      currentQuestionIndex: 0,
      questions: [],
      userAnswers: [],
      score: 0,
    });
  };

  if (view === 'home') {
    return <HomeView onStartQuiz={startQuiz} />;
  }

  if (view === 'question' && quizState.questions.length > 0) {
    return (
      <QuestionView
        question={quizState.questions[quizState.currentQuestionIndex]}
        onAnswer={handleAnswer}
        currentQuestionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
      />
    );
  }

  if (view === 'results') {
    return (
      <ResultsView
        score={quizState.score}
        totalQuestions={quizState.questions.length}
        onReturnHome={returnHome}
      />
    );
  }

  return null;
}
