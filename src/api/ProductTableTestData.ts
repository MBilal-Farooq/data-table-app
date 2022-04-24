import { ColumnType } from "../dataTable/DataTable";

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
        return [
            {
            id: '1',
            product: "ABC",
            price: '$15.2', 
            type: "y"
            }, {
            id: '2',
            product: "DEF",
            price: '$15.5', 
            type: "x"
            }
        ];
    }
}