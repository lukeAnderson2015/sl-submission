  import './Table.css';
  import {ISale, ITable}from './types';
  import {formatCurrency, convertFromCamelCaseToReadable} from './utils';
  import ChevronUp from './icons8-chevron-up-30.png';
  import ChevronDown from './icons8-chevron-down-30.png';
import { DESCENDING } from './sortingConfigSlice';

function TableComponent ({data, sortingConfig, onSortColumn}: ITable) {
    const columns: string[] = Object.keys(data[0]);
    return (
        <table className="table">
            <thead>
                <tr className='table__row'>
                    {columns.map(c => (
                        <th className="table__entry" key={c}>
                            <button
                                className="table__sort-button"
                                onClick={() => onSortColumn(c)}
                            >
                                <p>{convertFromCamelCaseToReadable(c)}</p>
                                <img
                                    className="table__sort-caret"
                                    alt="sort column"
                                    src={
                                        (sortingConfig.column === c && sortingConfig.direction === DESCENDING) 
                                        ? ChevronUp
                                        : ChevronDown 
                                    }
                                />
                            </button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((e: ISale) => (
                    <tr className='table__row' key={e.weekEnding}>
                        <td className="table__entry align-left"><p>{e.weekEnding}</p></td>
                        <td className="table__entry"><p>{formatCurrency(e.retailSales)}</p></td>
                        <td className="table__entry"><p>{formatCurrency(e.wholesaleSales)}</p></td>
                        <td className="table__entry"><p>{e.unitsSold}</p></td>
                        <td className="table__entry"><p>{formatCurrency(e.retailerMargin)}</p></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableComponent;