import { ColumnType } from "../dataTable/Table";


/**
 * Test data
 */
export default class ProductTableTestData {

    /** Columns Info */
    public static get Columns(): Array<ColumnType> {
        return [
            {
            id: 'product', // Uniq ID to identify column
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
    }

    /** Rows */
    public static get Rows() {
        const rows = [...Array(5)].map( (_value, index) => {
            return {
                id: `${index}`,
                product: `ABC-${index}`,
                price: '$15.0', 
                type: "ABC"
                }
        });
        return rows;
    }
}