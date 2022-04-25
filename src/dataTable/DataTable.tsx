import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Table, { ColumnType, RowType } from "./Table";

/**
 * Data Table Props
 */
export interface DataTableProps<T extends RowType> {
  rows: Array<T>;
  columns: Array<ColumnType<T>>;
  /** To show the loading bar */
  loading?: boolean;
  /** will be called on any row click */
  onRowClick?: (rowData: T, rowIndex: number) => void;
  /** On selection change */
  onSelectionChange?: (selectedRows: T[]) => void;
  /** Will be called when scrolled to end */
  onScrollToEnd?: () => void;
}

/**
 * Data Table Component
 */
export default function DataTable<T extends RowType>({rows, columns, loading, onRowClick, onSelectionChange, onScrollToEnd}: DataTableProps<T>): JSX.Element {
  const [selectedRows, setSelectedRows] = useState<Array<T>>([]);

  /** On select all change */
  const onSelectAllChange = () => {
    const allSelected = selectedRows.length === rows.length;
    const selectAllRows = rows.map((row) => {
      row.isSelected = !allSelected;
      return row;
    });

    allSelected ? setSelectedRows([]) : setSelectedRows(selectAllRows);
    // Calling on selection change with all rows
    onSelectionChange?.(selectAllRows);
  };

  /** On checkbox change */
  const onSelectChange = (rowIndex: number) => {
    const row = rows[rowIndex];

    row.isSelected ? selectedRows.splice(rowIndex, 1) : selectedRows.push(row);
    row.isSelected = !row.isSelected;
    setSelectedRows([...selectedRows]);
    onSelectionChange?.(selectedRows);
  };

  return (
    <Table<T>
      columns={columns}
      rows={rows}
      loading={loading ?? false}
      selectable={true}
      selectAll={selectedRows.length === (rows.length || -1)}
      onRowClick={onRowClick}
      onSelectAllChange={onSelectAllChange}
      onSelectChange={onSelectChange}
      onScrollToEnd={onScrollToEnd}
    ></Table>
  );
}
