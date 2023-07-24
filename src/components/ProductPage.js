import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../actions/productAction';

export default function ProductPage() {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productAction())
    }, [])

    // const newData = useSelector(value => {
    //     return value.product
    // })

    // console.log(newData)

    return (
        <div>
            {/* {
                (newData?.drinks || []).map(value => {
                    return (
                        <div className="card mb-3" style={{ maxWidth: "100%" }} key={value.idDrink}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={value.strDrinkThumb} className="card-img-top" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{value.strDrink}</h5>
                                        <p className="card-text">{value.strInstructions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } */}
        </div >
    )

}
