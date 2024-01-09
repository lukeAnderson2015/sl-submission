interface IReview {
    customer: string;
    review: string;
    score: number;
}

interface ISale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

interface ITable {
    data: ISale[];
    sortingConfig: ISortingConfig;
    onSortColumn: Function;
}

interface IProductSalesView {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: IReview[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: ISale[];
}

interface IDetailsPane {
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
    containerClassName: string;
}

enum ESortDirection {
    ASCENDING = 'ascending',
    DESCENDING = 'descending'
}

interface ISortingConfig {
    column: string;
    direction: ESortDirection;
}

interface IState {
    sortingConfig: ISortingConfig
}

interface IChart {
    data: {
        labels: string[];
        datasets: any; // ChartJS config object
    };
    containerClassName: string;
}

export type {
    IReview,
    IProductSalesView,
    ISale,
    IDetailsPane,
    IState,
    IChart,
    ESortDirection,
    ITable
}