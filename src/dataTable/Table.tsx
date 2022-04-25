
import { useCallback, useRef } from "react";
import { Spinner } from "react-bootstrap";
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
    /** For checkbox selection */
    isSelected?: boolean;
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
    /** To set the SelectAll checkbox state */
    selectAll?: boolean;
    /** To show loader */
    loading: boolean;
    /** Will be called on any row click */
    onRowClick?: (rowData: T, rowIndex: number) => void;
    /** Will be called on checkbox selection change */
    onSelectChange?: (rowIndex: number) => void;
    /** Will be called on SelectAll checkbox change */
    onSelectAllChange?: () => void;
    /** Will be called when scrolled to end. Please use useCallBack hook for this call back */
    onScrollToEnd?: () => void;
}

/** Table */
export default function Table<T extends RowType>(props: TableProps<T>): JSX.Element {

    const {columns, rows, selectable, selectAll, loading, onRowClick, onSelectChange, onSelectAllChange, onScrollToEnd} = props;
    
    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback( (item: HTMLTableRowElement) => {
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver( (enteries) => {
            if (enteries[0].isIntersecting) {
                onScrollToEnd?.();
            }
        });
        if (item) observer.current.observe(item);
    }, [onScrollToEnd]);

    /** Table Headers */
    const tableHeader = () => {
        return (
            <thead>
                <tr>
                    {selectable && <th key={"SelectAll"}><input type={"checkbox"} checked={selectAll ?? false} onChange={ () =>  onSelectAllChange?.() }></input></th>}
                    {columns.map( (column, index) => {
                        return (
                            <th style={{width: column.width}} key={`col-${index}`}>{column.label}</th>
                        );
                    })}
                </tr>
            </thead>
        );
    }

    /** Table Body */
    const tableBody = () => {
        return (
            <tbody>
                {rows.map( (row, index) => {
                    const isRowChecked = row.isSelected ?? false;
                    return (
                        <tr key={`Row-${index}`} ref={index + 1 === rows.length ? lastItemRef : undefined} onClick={() => onRowClick?.(row, index)}>
                            {selectable && <td key={`Row-${index}-Col-CheckBox`}><input type={"checkbox"} checked={isRowChecked} onChange={ () => {onSelectChange?.(index)} }></input></td>}
                            {columns.map( (column, colIndex) => {
                            return (
                                <td className={column.numeric ? 'cell-right-aligned' : ""} key={`Row-${index}-Col-${colIndex}`}>
                                    {row[column.id]}
                                </td>

                            )
                        })}</tr>
                    );
                })
                }
            </tbody>
        )
    }

    return (
        <div className="data-table">
            <table className="table table-hover">
                {tableHeader()}
                {tableBody()}
            </table>
            {loading && 
                <div style={{width: "100%", textAlign: "center"}}>
                    <Spinner animation="border" />
                </div>
            }
        </div>
    );
}