import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId;

let entries;

export default class transDAO {
    static async injectDB(conn){
        if(entries){
            return;
        }
        try {
            entries = await conn.db("erpfy").collection("transactions");
        }catch(e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`);
        }
    }
    //Will receive Entry object if possible intead of attributes of an Entry
    static async addEntry(payload){
        try{
            
            console.log("adding");
            return await entries.insertOne(payload);
        }catch (e) {
            console.error(`Unable to post entry; ${e}`);
            return{ error: e};
        }
    }

    static async getEntry(entryId){
        try {
            return await entries.findOne({_id: new Object(entryId)});
        } catch (e) {
            console.error(`Unable to get entry: ${e}`);
            return {error: e};
        }
    }

    static async updateEntry(Entry) {
        try{
            const updateResponse = await entries.updateOne(
                { _id: new ObjectId(Entry.Id) },
                { $set: {
                    date : Entry.date,
                    account : Entry.account,
                    credit : Entry.credit,
                    quantity : Entry.quantity,
                    amount : Entry.amount,
                    bank : Entry.bank,
                    debit : Entry.debit
                }}

            )
            return updateResponse;
        }catch (e) {
            console.error(`Unable to update entry: ${e}`);
            return { error: e};
        }
    }

    static async deleteEntry(entryId){
        try {
            const deleteResponse = await reviews.deleteOne({ _id: new ObjectId(entryId)});
            return deleteResponse;

        }catch(e){
            console.error(`Unable to delete Entry: ${e}`);
            return {error: e};
        }
    }

}