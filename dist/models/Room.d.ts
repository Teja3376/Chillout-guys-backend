import moongoose, { Document } from 'mongoose';
export interface IRoom extends Document {
    name: string;
    createdAt: Date;
}
declare const _default: moongoose.Model<IRoom, {}, {}, {}, moongoose.Document<unknown, {}, IRoom, {}, {}> & IRoom & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
