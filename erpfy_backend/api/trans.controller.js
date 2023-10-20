import transDAO from "../dao/transDAO.js";


export default class transController {
    static async apiPostEntry( req, res, next){
        try{
            const payload = req.body;

            const entryResponse = await transDAO.addEntry(payload)

            res.json({ status: "success"});
        }catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async apiGetEntry( req, res, next){
        try {
            let entryId = req.params.ID ||{};
            let entry = await transDAO.getEntry(entryId);

            if( !entry ){
                res.status(404).json({error: "apigetEntry no entry found"});
                return;
            }
            res.json(entry)
        }catch(e){
            console.log(`api.${e}`);
        }
    }

    static async apiUpdateEntry( req, res, next){
        try {
            const entry = req.body.entry;

            const entryRespone = await transDAO.updateEntry(entry);

            var {error} = entryRespone;
            if(error) {
                res.status(400).json({ error });
            }

            if(entryRespone.modifiedCount === 0){
                throw new Error("Unable to update");
            }
            res.json({status: "success"});
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    static async apiDeleteEntry( req, res, next) {
        try{
            const entryId = req.params.id;
            const reviewResponse = await transDAO.deleteEntry(entryId);
            res.json({status: "success"})
        }catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}