import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Table, { ColumnType } from "./Table";

/**
 * Data Table Props
 */
export interface DataTableProps<T>{
    rows: Array<T>;
    columns: Array<ColumnType>;
    /** will be called on any row click */
    onRowClick?: (rowData: any, rowIndex: number) => void;
    /** On selection change */
    onSelectionChange?: (selectedRows: any[]) => void;
}



/**
 * Data Table Component
 */
export default function DataTable<T>({rows, columns, onRowClick, onSelectionChange}: DataTableProps<T>): JSX.Element {

    const [selectedRows, setSelectedRows] = useState<Array<any>>([]);

    /** On select all change */
    const onSelectAllChange = () => {
        const allSelected = selectedRows.length === rows.length;
        allSelected ? setSelectedRows([]) :
        setSelectedRows(rows);
        // Calling on selection change with all rows
        onSelectionChange?.(rows);
    }

    /** On checkbox change */
    const onSelectChange = (rowIndex: number) => {

        const row = rows[rowIndex];
        const rowSelected = selectedRows.includes(row);

        rowSelected ? selectedRows.splice(rowIndex, 1) : selectedRows.push(row);

        setSelectedRows([...selectedRows]);
        onSelectionChange?.(selectedRows);
    }

    return (
        <Table<T> columns={columns} rows={rows} selectable={true} selectedRows={selectedRows} onRowClick={onRowClick} onSelectAllChange={onSelectAllChange} onSelectChange={onSelectChange}></Table>
    )

}