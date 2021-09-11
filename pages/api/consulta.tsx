import { NextApiRequest, NextApiResponse } from "next";
//import { PrismaClient } from "@prisma/client";
const fs = require('fs');

//const prisma = new PrismaClient();


    const consulta = async (req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method !== 'POST'){
        return res.status(405)
    }else{
        const dataReq = JSON.parse(req.body)

        const dataSave = {
            cep: dataReq.cep,
            res_api: JSON.stringify(dataReq)
        }
        
        /*const saveCep = await prisma.queries.create({
            data:dataSave
        })*/
        
        const dataDb = require('../../prisma/dev_db.json');

        const datoToPushOnJSON = {
            "id" : dataDb.queries.length + 1,
            "cep" : dataReq.cep,
            "res_api" : dataReq
        };
        
        fs.readFile('prisma/dev_db.json', 'utf8', function readFileCallback(err:any, data:any){
            if (err){
                console.log(err);
            } else {
            const obj = JSON.parse(data);
            obj.queries.push(datoToPushOnJSON);
            const json = JSON.stringify(obj);
            fs.writeFile('prisma/dev_db.json', json, 'utf8');
        }});
        res.json({msg:'done'});
    }
}

export default consulta