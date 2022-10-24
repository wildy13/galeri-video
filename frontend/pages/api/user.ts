import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getUser(
    res: NextApiResponse
) {
   const User = await axios.get('http://localhost:5001/api/user/')
    res.status(200).json({ User });
}