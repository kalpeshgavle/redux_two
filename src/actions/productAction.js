import axios from "axios"

export const productAction = () => {
    return async function (dispatch, getState) {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        // console.log(response)
        dispatch({
            type: "PRODUCTS",
            payload: response.data
        })
    }

    // return {
    //     type: "PRODUCTS",
    //     payload: { data: "hello" }
    // }
}