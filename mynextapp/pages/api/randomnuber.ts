import { NextApiRequest, NextApiResponse } from "next";

export default function(req: NextApiRequest, res: NextApiResponse){
    return res.json({num:Math.floor(Math.random() * 10  )})
}