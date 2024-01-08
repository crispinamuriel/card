import React, { useState } from 'react';

type AnswerOption = {
  answer: string;
  correctAnswer: boolean;
  answerHeadline: string;
  answerMessage: string;
};

type QuizProps = {
  answerOptions: AnswerOption[];
};

const QuizComponent: React.FC<QuizProps> = ({ answerOptions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelection = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div>
      {answerOptions.map((option, index) => (
        <div key={index} className="mb-2">
          <input
            type="radio"
            id={`answer_${index}`}
            name="answers"
            value={option.answer}
            checked={selectedAnswer === index}
            onChange={() => handleAnswerSelection(index)}
            className="mr-2"
          />
          <label htmlFor={`answer_${index}`}>{option.answer}</label>
          {selectedAnswer === index && (
            <div className="ml-6">
              <p>{option.answerHeadline}</p>
              <p>{option.answerMessage}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
