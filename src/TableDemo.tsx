import { useEffect, useState } from "react";
import ProductTableTestData from "./api/ProductTableTestData";
import DataTable from "./dataTable/DataTable";
import { ColumnType } from "./dataTable/Table";

export function TableDemo(): JSX.Element {

    const columns: Array<ColumnType> = [
        {
        id: 'product',
        label: 'Product',
        numeric: false
       }, {
        id: 'price',
        label: 'Price',
        numeric: false,
        width: "40%"
       }, {
        id: 'type',
        label: 'Type',
        numeric: false,
        width: ""
       }, {
        id: 'etc',
        label: 'ETC',
        numeric: false,
        width: undefined
       }
    ];

    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState<{
        id: string;
        product: string;
        price: string;
        type: string;
    }[]>([]);
    
    useEffect( () => {
        const data = ProductTableTestData.Rows;
        setTableData(data);
    }, []);

    /** On table row click */
    const onRowClick = (_rowData: any, _index: number) => {
        // handle onRowClick event
    }

    const onSelectionChange = (_selectedRows: any[]) => {
        // To do something with selectedRows
    }

    const onScrollToEnd = () => {
        if (loading) return;
        setLoading(true);
        setTimeout( () => {
            tableData.push(...ProductTableTestData.Rows);
            setTableData([...tableData]);
            setLoading(false);
        }, 2000 );
    }
    
    return (
        <div className="table-block">
            <DataTable columns={columns} rows={tableData} loading={loading} onRowClick={onRowClick} onSelectionChange={onSelectionChange} onScrollToEnd={onScrollToEnd}></DataTable>
        </div>
    );

}