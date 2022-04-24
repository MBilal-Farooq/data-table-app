import { useEffect, useState } from "react";
import ProductTableTestData from "./api/ProductTableTestData";
import DataTable from "./dataTable/DataTable";
import { ColumnType } from "./dataTable/Table";

export function TableDemo(): JSX.Element {

    const [tableData, setTableData] = useState<any>([]);

    const columns: Array<ColumnType> = ProductTableTestData.Columns;
    
    useEffect( () => {
        const data = ProductTableTestData.Rows;
        setTableData(data);
    }, []);

    /** On table row click */
    const onRowClick = (rowData: any, _index: number) => {
        console.log(rowData);
    }

    const onSelectionChange = (_selectedRows: any[]) => {
        // To do something with selectedRows
    }
    
    return (
        <div className="table-block">
            <DataTable columns={columns} rows={tableData} onRowClick={onRowClick} onSelectionChange={onSelectionChange}></DataTable>
        </div>
    );

}