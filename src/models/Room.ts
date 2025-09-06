import moongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
    name: string;
    createdAt: Date;
}

const RoomSchema: Schema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }

})

export default moongoose.model<IRoom>('Room', RoomSchema);