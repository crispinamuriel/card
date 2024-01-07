'use client';
import React, { useState, useEffect } from 'react';

interface Card {
  card_id: number;
  card_type: string;
  type: string;
  hasWhy?: boolean | null | undefined;
  audio?: string | null | undefined;
  interstitial_type?: string | null | undefined;
  icon?: string | null | undefined;
  body: string;
  headline?: string | null | undefined;
  headerLabelPrimary?: string | null | undefined;
  headerLabelSecondary?: string | null | undefined;
  hasSignature?: boolean | null | undefined;
  whyBody?: string | null | undefined;
  whyLabel?: string | null | undefined;
  AnswerOptions?: {
    answer: string;
    correctAnswer: boolean;
    answerHeadline: string;
    answerMessage: string;
  }[];
}

const Card = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bff.goodinside.dev/api/p/cards/mock');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {cards.map(item => (
        <div key={item.card_id} className="flex flex-col max-w-sm w-full lg:max-w-full lg:flex mb-10 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950">
          <span className="max-w-fit mb-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {item.type}
          </span>
          <h3 className="mb-2">{item.headline}</h3>
          {item.body}
          {item.type == 'audio' && item?.audio !== null && item?.audio !== undefined ? (
            <audio controls>
              <source src={item.audio} type={'audio/mpeg'} />
              Your browser does not support the audio element.
            </audio>) : ''}
        </div>
      ))}
    </div>
  );
};

export default Card;
