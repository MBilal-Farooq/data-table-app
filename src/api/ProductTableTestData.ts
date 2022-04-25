

/**
 * Test data
 */
export default class ProductTableTestData {

    /** Rows */
    public static get Rows() {
        const rows = [...Array(25)].map( (_value, index) => {
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