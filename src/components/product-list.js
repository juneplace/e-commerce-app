import React, { Component } from 'react';
import Product from './product';
import Title from './Title.js';
import {ProductConsumer} from '../context.js';


class ProductList extends Component {

render() {
    return(
        <React.Fragment>
            <div>
            <Title name='our' title='products' />
            <div>
            <ProductConsumer>
                {(value)=>{
                    return value.products.map(product => {
                        return <Product key={product.id} product={product} />
                    })
    }}
            </ProductConsumer>
            </div>
            </div>
        </React.Fragment>
       // <Product />
    )
}
}

export default ProductList;