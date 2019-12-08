export class Data {
    // Year and cash displayed in HeaderComponent
    public year: number;
    public cash: number;

    // Contains data used in CompanyDetailsComponent
    public companyDetails: object;
    public stockList: object;

    // Contains data used in SummaryComponent
    public yearStats: object;

    // Stores the response from the AWS API
    public response: object;

    constructor() {
        this.year = 0;
        this.cash = 400;
        this.companyDetails = [{"name": 'A', "chance": [1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'B', "chance": [1], "quantity": 0, "stockIndex": 9},
                                {"name": 'C', "chance": [1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'D', "chance": [1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'E', "chance": [1, 1, 1], "quantity": 0, "stockIndex": 9}, 
                                {"name": 'F', "chance": [1, 1, 1], "quantity": 0, "stockIndex": 9}];
        this.stockList = [400, 320, 256, 200, 160, 128, 100, 80, 64, 50, 40, 32, 25, 20, 16, 12, 10, 8, 6, 0];
        this.yearStats = [{"year": 0, "cash": 400, "interest": 0, "stocks": 0, "total": 400, "stockIndex": [9, 9, 9, 9, 9, 9]},
        {"year": 1, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex": [-1, -1, -1, -1, -1, -1]},
        {"year": 2, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 3, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 4, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 5, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 6, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 7, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 8, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 9, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]},
        {"year": 10, "cash": 0, "interest": 0, "stocks": 0, "total": 0, "stockIndex":  [-1, -1, -1, -1, -1, -1]}];
        this.response = {"key": 11866, "random": [[7, 7, 1, 7, 6, 4, 7, 5, 6, 8, 8, 8], 
        [6, 8, 3, 8, 1, 6, 4, 1, 5, 8, 8, 2], [6, 4, 8, 7, 1, 2, 2, 8, 2, 8, 8, 8], 
        [7, 3, 3, 6, 6, 5, 7, 1, 5, 8, 8, 2], [8, 3, 6, 7, 7, 4, 1, 6, 2, 8, 8, 8], 
        [7, 2, 4, 2, 4, 7, 1, 3, 6, 8, 8, 8], [7, 2, 3, 8, 7, 1, 3, 8, 2, 8, 8, 8], 
        [3, 1, 7, 8, 7, 7, 5, 6, 6, 8, 8, 8], [5, 1, 8, 3, 7, 8, 6, 5, 7, 8, 8, 8],
        [5, 1, 8, 3, 7, 8, 6, 5, 7, 7, 4, 5]]};
    }
}
