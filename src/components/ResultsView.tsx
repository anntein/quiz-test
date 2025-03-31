import { FC } from 'react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  onReturnHome: () => void;
}

const ResultsView: FC<ResultsViewProps> = ({
  score,
  totalQuestions,
  onReturnHome,
}) => {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="text-6xl font-bold mb-4">
          {score}/{totalQuestions}
        </div>
        <p className="text-xl text-gray-600 mb-2">
          {percentage}% Correct
        </p>
        <p className="text-lg">
          {percentage >= 80 ? 'Excellent!' :
           percentage >= 60 ? 'Good job!' :
           'Keep practicing!'}
        </p>
      </div>

      <button
        onClick={onReturnHome}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Return Home
      </button>
    </div>
  );
};

export default ResultsView; 