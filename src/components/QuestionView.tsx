import { FC, useState } from 'react';
import { Question } from '@/lib/types';

interface QuestionViewProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  currentQuestionNumber: number;
  totalQuestions: number;
}

const QuestionView: FC<QuestionViewProps> = ({
  question,
  onAnswer,
  currentQuestionNumber,
  totalQuestions,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleAnswer = async (answerId: string) => {
    setSelectedId(answerId);
    
    if (answerId === question.correctAnswerId) {
      setShowEmoji(true);
      // Wait for animation
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // Reset states before moving to next question
    setShowEmoji(false);
    setSelectedId(null);
    
    // Move to next question
    onAnswer(answerId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Question {currentQuestionNumber} of {totalQuestions}
          </p>
          <h2 className="text-xl font-bold">{question.text}</h2>
        </div>

        <div className="space-y-4">
          {question.alternatives.map((alternative) => (
            <button
              key={alternative.id}
              onClick={() => handleAnswer(alternative.id)}
              disabled={selectedId !== null}
              className={`w-full p-4 text-left border rounded-lg transition-colors ${
                selectedId === null ? 'hover:bg-[#222222] hover:text-white' :
                alternative.id === question.correctAnswerId ? 'bg-[#222222] text-white' :
                selectedId === alternative.id ? 'bg-[#222222] text-white' : ''
              }`}
            >
              {alternative.text} {showEmoji && alternative.id === question.correctAnswerId && " 🤩"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionView; 