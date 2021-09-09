import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method !== 'POST'){
        return res.status(405)
    }
    const data = req.body[2]
    console.log(data)
}