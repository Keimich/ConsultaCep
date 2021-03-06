import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

    const consulta = async (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method !== 'POST'){
        return res.status(405);
    } else {
        const dataReq = JSON.parse(req.body);

        const dataSave = {
            cep: dataReq.cep,
            res_api: JSON.stringify(dataReq)
        };
        
        const saveCep = await prisma.queries.create({
            data:dataSave
        });
        
        res.json(saveCep);
    };
};

export default consulta