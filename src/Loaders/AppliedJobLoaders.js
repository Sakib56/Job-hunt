import { getShoppingCart } from "../Utilities/FakeDb";


const appliedJobLoader = async () => {
    const loaderProducts = await fetch('/JobFeature.json');
    const products = await loaderProducts.json();
    // console.log(products)

    const storedCart = getShoppingCart() 
    // console.log(storedCart)
    const savedCart = [];
    for(const id in storedCart){
        // console.log(id)
        const addedProduct = products.find(pd => pd.id === id)
        // console.log(addedProduct)
        if(addedProduct){
            const newQuantity = storedCart[id]
            addedProduct.quantity = newQuantity;
            // console.log(addedProduct)
            savedCart.push(addedProduct)
        }
    }
    // console.log(savedCart)

    return savedCart
}
export default appliedJobLoader;