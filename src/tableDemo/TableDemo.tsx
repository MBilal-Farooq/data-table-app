import { useState, useCallback, useEffect } from "react";
import { SampleDataType } from "../api/SampleDataType";
import DataTable from "../dataTable/DataTable";
import { ColumnType } from "../dataTable/Table";
import { useFetch } from "../hooks/useFetch";

export function TableDemo(): JSX.Element {

    const columns: Array<ColumnType> = [
        {
        id: 'id',
        label: 'Id',
        numeric: false
       }, {
        id: 'albumId',
        label: 'Album Id',
        numeric: false,
        width: "20%"
       }, {
        id: 'url',
        label: 'URL',
        numeric: false,
        width: ""
       }
    ];

    /** all data to show in table */
    const [tableData, setAllData] = useState<SampleDataType[]>([]);
    
    /** For pagination */
    const [currentPage, setCurrentPage] = useState<number>(0); 
    
    /** page data */
    const [pageData, hasMoreData] = useFetch(currentPage, 15);

    /** Loading  */
    const [loading, setLoading] = useState<boolean>(false);

    /** useEffect */
    useEffect( () => {
        setAllData( (allData) => {
            return [...allData, ...pageData];
        });
    }, [pageData] )

    /**
     * On Scrol End
     */
    const onScrollToEnd = useCallback( () => {
        if (!hasMoreData) return;
        setLoading(true);
        /** Adding it intentionally to just to show the scroll bar */
        setTimeout( () => {
            setCurrentPage( (pageNumber) => pageNumber + 1 );
            setLoading(false);
        }, 500 );
    }, [hasMoreData]);

    /** On table row click */
    const onRowClick = (_rowData: any, _index: number) => {
        // handle onRowClick event
    }

    const onSelectionChange = (_selectedRows: any[]) => {
        // To do something with selectedRows
    }
    
    return (
        <div className="table-block">
            <DataTable columns={columns} rows={tableData} loading={loading} onRowClick={onRowClick} onSelectionChange={onSelectionChange} onScrollToEnd={onScrollToEnd}></DataTable>
        </div>
    );

}
