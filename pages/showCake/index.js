import React from 'react'
import { useStateValue } from '../../hoc/StateProvider'
import ShowSinglePorduct from '../../component/ShowSinglePorduct/ShowSinglePorduct'
//experimenting

function index() {

    const [{ShowProductsPage}, dispatch]  = useStateValue()

    return (
        <div>
            {
                ShowProductsPage.map((item, index) =>

                    <ShowSinglePorduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description= {item.description}
                    url={item.url}
                    />
                )
            }
        </div>
    )
}

export default index
