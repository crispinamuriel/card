import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(
      'https://bff.goodinside.dev/api/p/cards/mock',
      {
        method: 'GET', // Adjust the method as needed (GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers for the external API
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      const error = new Error(`Received ${response.status} from the server`);
      throw error;
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
};
