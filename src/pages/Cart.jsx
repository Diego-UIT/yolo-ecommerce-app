import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import productData from '../assets/fake-data/products'

import cartEmpty from '../assets/images/cartEmpty.jpg'

import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'
import Section, { SectionTitle } from '../components/Section'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)
    console.log(cartItems)

    const [cartProducts, setCartProducts] = useState([])
    
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])
    
    return (
        <Helmet title="Giỏ hàng">
            {
                cartItems.length === 0 ? (
                    <Section>
                        <SectionTitle>
                            <div className="cart-empty">
                                <img src={cartEmpty} alt=""/>
                                <p>Giỏ hàng của bạn hiện tại không có sản phẩm!</p>
                            </div>
                        </SectionTitle>
                    </Section>
                ) : (<div className="cart">
                        <div className="cart__info">
                            <div className="cart__info__txt">
                                <p>
                                    Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                                </p>
                                <div className="cart__info__txt__price">
                                    <span>Thành tiền</span>
                                    <span>{numberWithCommas(totalPrice)}</span>
                                </div>
                            </div>
                            <div className="cart__info__btn">
                                <Button size="block">đặt hàng</Button>
                                <Link to="/catalog">
                                    <Button size="block">tiếp tục mua hàng</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="cart__list">
                            {
                                cartProducts.map((item, i) => (
                                    <CartItem key={i} item={item} />
                                ))
                            }
                        </div>
                    </div>)
            }
        </Helmet>
    )
}

export default Cart
