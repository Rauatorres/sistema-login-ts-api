import { Collection } from "mongodb";
import client from "./dbconnection";

function DbAccess(_target: any, _property: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]){
        await client.connect();
        const res = await originalMethod.apply(this, args);
        await client.close();
        return res;
    }    
}

export default class DAO{
    private db: Collection;
    protected collection: string;

    constructor(collection: string){
        this.collection = collection;
        this.db = client.db('main').collection(this.collection);
    }

    @DbAccess
    async find(attributes?: object){
        if (typeof attributes != 'undefined'){
            const res = await this.db.findOne(attributes);
            if(res == null){
                return {};
            }
            return res;
        }
        return await this.db.find().toArray();
    }

    @DbAccess
    async insert(newDocument: object){
        return await this.db.insertOne(newDocument);
    }

    @DbAccess
    async delete(attributes: object){
        return await this.db.deleteMany(attributes);
    }

    @DbAccess 
    async update(documentAttributes: object, newAttributes: object){
        return await this.db.updateMany(documentAttributes, { $set: newAttributes })
    }
};