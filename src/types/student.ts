import { Timestamp } from "firebase/firestore";

export interface Student {
    id: string;
    name: string;
    age: number;
    school: string;
    createdAt: Timestamp
}