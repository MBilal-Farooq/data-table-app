import "bootstrap/dist/css/bootstrap.min.css";
import "./DataTable.css";

/** Table Column Definition */
export type ColumnType = {
    id: string,
    label: string, 
    numeric: boolean,
    width?: string
}

/** Table Props */
export interface DataTableProps {
    columns: Array<ColumnType>;
    rows: Array<any>;
    /** will be called on any row click */
    onRowClick?: (rowData: any, rowIndex: number) => void;
}

/**
 * Data Table Component
 */
export default function DataTable({rows, columns, onRowClick}: DataTableProps): JSX.Element {

    /** Table Headers */
    const tableHeader = () => {
        return (
            <thead>
                <tr>
                    {columns.map( (column) => {
                        return (
                            <th style={{width: column.width}} key={column.id}>{column.label}</th>
                        );
                    } )}
                </tr>
            </thead>
        );
    }

    /** Table Body */
    const tableBody = () => {
        return (
            <tbody>
                {rows.map( (row, index) => {
                    return (
                        <tr key={`Row-${index}`} onClick={() => onRowClick?.(row, index)}>
                            {columns.map( (column, colIndex) => {
                            return (
                                <td className={column.numeric ? 'cell-right-aligned' : ""} key={`Row-${index}-Col-${colIndex}`}>
                                    {row[column.id]}
                                </td>
                            )
                        })}</tr>
                    );
                })}
            </tbody>
        )
    }

    return (
        <div>
            <table className="table table-hover">
                {tableHeader()}
                {tableBody()}
            </table>
        </div>
    );
}