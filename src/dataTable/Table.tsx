
import "./Table.css";

/** Table Column Definition */
export type ColumnType = {
    id: string,
    label: string, 
    numeric: boolean,
    width?: string
}

/** Row Data Type */
export type RowType = {
    [key: string]: any;
}

/** Table Props */
export interface TableProps<T extends RowType> {
    /** Column definition */
    columns: Array<ColumnType>;
    /** Row data */
    rows: Array<T>;
    /** To show checkboxes */
    selectable: boolean;
    /** To specify selected rows */
    selectedRows?: Array<T>;
    /** Will be called on any row click */
    onRowClick?: (rowData: T, rowIndex: number) => void;
    /** Will be called on checkbox selection change */
    onSelectChange?: (rowIndex: number) => void;
    /** Will be called on SelectAll checkbox change */
    onSelectAllChange?: () => void;
}

/** Table */
export default function Table<T extends RowType>(props: TableProps<T>): JSX.Element {

    const {columns, rows, selectable, selectedRows, onRowClick, onSelectChange, onSelectAllChange} = props;
    
    /** Table Headers */
    const tableHeader = () => {
        return (
            <thead>
                <tr>
                    {selectable && <th key={"SelectAll"}><input type={"checkbox"} checked={selectedRows?.length === rows.length} onChange={ () =>  onSelectAllChange?.() }></input></th>}
                    {columns.map( (column, index) => {
                        return (
                            <th style={{width: column.width}} key={`col-${index}`}>{column.label}</th>
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
                    const isRowChecked = selectedRows?.includes(row);
                    return (
                        <tr key={`Row-${index}`} onClick={() => onRowClick?.(row, index)}>
                            {selectable && <td key={`Row-${index}-Col-CheckBox`}><input type={"checkbox"} checked={isRowChecked} onChange={ () => {onSelectChange?.(index)} }></input></td>}
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
        <div className="data-table">
            <table className="table table-hover">
                {tableHeader()}
                {tableBody()}
            </table>
        </div>
    );
}