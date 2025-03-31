import { FC } from 'react';

interface HomeViewProps {
  onStartQuiz: () => void;
}

const HomeView: FC<HomeViewProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Quiz Clash ⚡️</h1>
      <button
        onClick={onStartQuiz}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        New Quiz
      </button>
    </div>
  );
};

export default HomeView; 