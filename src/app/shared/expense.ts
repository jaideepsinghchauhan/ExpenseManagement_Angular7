export class Expense {
// can use a model too instead of class
    constructor(
        public category: string,
        public itemName: string,
        public amount: number,
        public date: string
    ) { }

}