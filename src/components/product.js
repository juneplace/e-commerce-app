import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context.js';
import { BiCart } from "react-icons/bi";
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
      const {id,title,img,price,inCart} = this.props .product;
        return(
          <div>
            <ProductWrapper className='col-9 mx-auto col-md-6'>
              <div className='card'>
                <ProductConsumer>
                {(value) => (
                    <div className='img-container' onClick={() => value.handleDetail(id)}>
                      <Link to='/details'>
                      <img src={img} alt='product img' className='card-img-top' />
                      </Link>
                      <button className='cart-btn' disabled={inCart?true:false} onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
}}>
                      {inCart?(<p disabled>{' '}in cart</p>):(<BiCart />)}
                      </button>
                      </div>
                )}

                </ProductConsumer>

                <div className='card-footer d-flex justify-content-between'>
                  <p className='align-self-center'>{title}</p>
                  <h5 className='text-blue font-italic'><span className='mr-1'>$</span>{price}</h5>
                </div>
              </div>
            </ProductWrapper>
          </div>  
        )
    }
}
Product.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string, 
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`

`

export default Product;