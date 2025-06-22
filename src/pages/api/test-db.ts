import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../app/db/connection';

type QueryResult = { solution: number }[];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connection.query('SELECT 1 + 1 AS solution', (err: Error | null, results: QueryResult) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed', details: err.message });
    }

    res.status(200).json({
      message: 'Database connected!',
      solution: results[0]?.solution, // Safely access the first element
    });
  });
}
