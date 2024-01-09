import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IProductSalesView, IState, ISale } from './types';
import DetailsPane from './DetailsPane';
import Chart from './Chart';
import Table from './Table';
import { changeSortColumn, changeSortDirection, ASCENDING } from './sortingConfigSlice';

import './ProductSalesView.css';

function ProductSalesViewComponent (viewData: IProductSalesView) {
    const sortingConfig = useSelector((state: IState) => state.sortingConfig);
    const dispatch = useDispatch()

    const handleChangeSortColumn = (columnName: string) => {
        if (sortingConfig.column !== columnName) {
            dispatch(changeSortColumn(columnName));
        } else {
            dispatch(changeSortDirection());
        }
    }

    const sortedSales = viewData.sales.sort((a: any, b:any) => {
        if(ASCENDING === sortingConfig.direction) {
            return a[sortingConfig.column] < b[sortingConfig.column] ? 1 : 0
        } else {
            return a[sortingConfig.column] > b[sortingConfig.column] ? 1 : 0
        }
    })

    const [chartData] = useState( {
        labels: sortedSales.map(s => s.weekEnding),
        datasets: [
            {
                label: 'Retail Sales',
                data: sortedSales.map(s => s.retailSales),
                borderColor: "#006eff",
                pointRadius: 1,
                tension: 0.4,
            },
            {
                label: 'Retailer Margin',
                data: sortedSales.map(s => s.retailerMargin),
                borderColor: "rgb(156,156,156)",                
                pointRadius: 1,
                tension: 0.4
            }
        ]
    });

    return (
        <div className="view-container">
            <DetailsPane 
                title={viewData.title}
                image={viewData.image}
                subtitle={viewData.subtitle}
                tags={viewData.tags}
                containerClassName="view-container__tile"
                />
            <div className="data-container">
                <div className="chart-container">
                    <Chart 
                        containerClassName="view-container__tile"
                        data={chartData}
                    />
                </div>
                <div className="view-container__tile">
                    <Table
                        data={viewData.sales}
                        sortingConfig={sortingConfig}
                        onSortColumn={handleChangeSortColumn}
                    />
                </div>
            </div>

        </div>
    )
}

export default ProductSalesViewComponent;