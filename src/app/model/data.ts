export class Data {
    year: number;
    cash: number;
    companyDetails: object;
    response: object;
    stockList: object;
    years: object;
    constructor() {
        this.year = 0;
        this.cash = 500;
        this.companyDetails = [{"name": 'A', "chance": [1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'B', "chance": [1], "quantity": 0, "stockIndex": 9},
                                {"name": 'C', "chance": [1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'D', "chance": [1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'E', "chance": [1, 1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'F', "chance": [1, 1, 1], "quantity": 0, "stockIndex": 9}];
        this.response = {"key": 11866, "random": [[7, 7, 1, 7, 6, 4, 7, 5, 6, 6, 1, 4], 
            [6, 8, 3, 8, 1, 6, 4, 1, 5, 7, 6, 2], [6, 4, 8, 7, 1, 2, 2, 8, 2, 8, 8, 7], 
            [7, 3, 3, 6, 6, 5, 7, 1, 5, 3, 7, 2], [8, 3, 6, 7, 7, 4, 1, 6, 2, 6, 2, 6], 
            [7, 2, 4, 2, 4, 7, 1, 3, 6, 5, 1, 8], [7, 2, 3, 8, 7, 1, 3, 8, 2, 6, 4, 2], 
            [3, 1, 7, 8, 7, 7, 5, 6, 6, 8, 8, 3], [5, 1, 8, 3, 7, 8, 6, 5, 7, 7, 4, 5]]};
        this.stockList = [400, 320, 300, 270, 240, 210, 180, 150, 120, 100, 80, 60, 40, 20, 0];
        this.years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
    
}
