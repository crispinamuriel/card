import React, { useState, useEffect } from 'react';

const data = [{
  'id': '1', 'type': 'audio/mpeg', 'title': 'Revisit – How Dare You Speak to Me That Way', 'text': 'Myleik Teele joins Dr. Becky this week to talk about disrespect and rudeness.', 'label': 'Rudeness', 'date': 'Jan 02, 2024', 'src': 'https://chrt.fm/track/6412E6/https://prfx.byspotify.com/e/locator.simplecastcdn.com/0cb2e4b1-5eda-4ee8-bb0e-6f61f20ba777/473e7918-2b00-415e-b76d-0d2cf61f414f.mp3?aid=embed'
}, {
  'id': '2', 'type': 'audio/mpeg', 'title': 'Motherhood: A Hero’s Journey', 'text': 'Author and comedian, Jessi Klein, joins Dr. Becky to talk about the highs and lows of motherhood.', 'label': 'Foundations', 'date': 'Dec 19, 2023', 'src': 'https://chrt.fm/track/6412E6/https://prfx.byspotify.com/e/locator.simplecastcdn.com/0cb2e4b1-5eda-4ee8-bb0e-6f61f20ba777/fcd72b94-f968-4aed-b037-d0345e8ae7ec.mp3?aid=embed'
}, {
  'id': '3', 'type': 'audio/mpeg', 'title': 'Navigating How I Show Up in This Family', 'text': 'Dr. Becky sits down with a man who is trying to figure out how to be a supportive and stable figure to his girlfriend’s daughter.', 'label': 'Foundations', 'date': 'Dec 12, 2023', 'src': 'https://chrt.fm/track/6412E6/https://prfx.byspotify.com/e/locator.simplecastcdn.com/0cb2e4b1-5eda-4ee8-bb0e-6f61f20ba777/cbb3cda2-bc04-40ff-b014-6cfe36e88154.mp3?aid=embed'
}]

const Card = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://bff.goodinside.dev/api/p/cards');
  //       const apiData = await response.json();
  //       setData(apiData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      {data.map(item => (
        <div key={item.id} className="flex flex-col max-w-sm w-full lg:max-w-full lg:flex mb-10 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950">
          <span className="max-w-fit mb-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{item.label}</span>
          <h3 className="mb-2">{item.title}</h3>
          <p className="mb-2">{item.text}</p>
          <span className="mb-2">{item.date}</span>
          {item.type == 'audio/mpeg' ? (
            <audio controls>
              <source src={item.src} type={item.type} />
              Your browser does not support the audio element.
            </audio>) : (<video controls>
              <source src={item.src} type={item.type} />
              Your browser does not support the video element.
            </video>)}
        </div>
      ))}
    </div>
  );
};

export default Card;
