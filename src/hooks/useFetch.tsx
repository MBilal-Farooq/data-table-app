import { useEffect, useRef, useState } from "react";
import { SampleDataType } from "../api/SampleDataType";

/**
 * Custom hook to fetch sample data, also provides pagination
 * @param page page number
 * @param itemsPerPage items per page
 * @returns [pageData, hasMoreData]
 */
export function useFetch(page: number, itemsPerPage: number): [SampleDataType[], boolean] {
    /** To store fetched data */
    const [data, setData] = useState<SampleDataType[] | undefined>([]);

    /** Page data */
    const [padgeData, setPageData] = useState<SampleDataType[]>([]);
    const [hasMoreData, setHasMoreData] = useState<boolean>(false);
    
    const loading = useRef(false);
    
    /** Fetching data */
    useEffect( () => {
        if (loading.current) return;
        (async () => {
            loading.current = true;
            const responce = await fetch("https://jsonplaceholder.typicode.com/photos");
            const responceData = await responce.json() as SampleDataType[];
            setHasMoreData(responceData.length > 0);
            setData(responceData ?? []);
        })();
    }, []);

    /** Pagination */
    useEffect( () => {
        if (data === undefined || !hasMoreData) return;

        const pageStartIndex = page * itemsPerPage;
        if (pageStartIndex >= data.length) {
            setHasMoreData(false);
            setPageData([]);
        } else {
            setHasMoreData(pageStartIndex + itemsPerPage < data.length);
            setPageData([...data.slice(pageStartIndex, pageStartIndex + itemsPerPage)]);
        }
        
    }, [page, itemsPerPage, data, hasMoreData]);

    return [padgeData, hasMoreData];
}