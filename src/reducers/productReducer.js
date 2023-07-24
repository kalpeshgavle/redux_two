export const getProducts = (prevState = [], action) => {
    switch (action.type) {
        case "PRODUCTS":
            return action.payload
        default:
            return prevState
    }
}
