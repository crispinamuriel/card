'use client'
import React, { useState, useEffect } from 'react';
import QuizCommponent from '@/components/QuizComponent/QuizComponent';

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
  answerOptions?: {
    answer: string;
    correctAnswer: boolean;
    answerHeadline: string;
    answerMessage: string;
  }[];
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/proxy');
        const apiData = await response.json();
        console.log(apiData);
        setCards(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      {cards.map(card => (
        <div key={card.card_id} className="flex flex-col max-w-sm w-full lg:max-w-full lg:flex mb-10 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950">
          <span className="max-w-fit mb-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {card.type}
          </span>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">{card.headline}</h3>
          <div dangerouslySetInnerHTML={{ __html: card.body }} />
          {card.type == 'audio' && card?.audio !== null && card?.audio !== undefined ? (
            <audio controls>
              <source src={card.audio} type={'audio/mpeg'} />
              Your browser does not support the audio element.
            </audio>) : ''}
          {card.type == 'question' && card.answerOptions !== null && card?.answerOptions !== undefined ?
            (<QuizCommponent answerOptions={card.answerOptions} />) : ''}
        </div>
      ))}
    </div>
  )
}