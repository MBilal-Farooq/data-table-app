import { ColumnType } from "../dataTable/Table";


/**
 * Test data
 */
export default class DataTableTestData {

    public static get Columns() {
        const columns: Array<ColumnType<typeof this.Rows[0]>> = [
            {
            id: "product",
            label: "Product",
            numeric: false
           }, {
            id: "price",
            label: "price",
            numeric: false,
            width: "20%"
           }
        ];
        return columns;
    }

    /** Rows */
    public static get Rows() {
        const rows = [...Array(10)].map( (_value, index) => {
            return {
                id: `${index}`,
                product: `ABC-${index}`,
                price: "$15.0",
                }
        });
        return rows;
    }
}