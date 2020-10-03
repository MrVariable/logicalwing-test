import { WORK_CATEGORY } from '../enums';

export class Worker {
    id: number;
    name: string;
    category: WORK_CATEGORY;
    gender: 'Male' | 'Female';
}
