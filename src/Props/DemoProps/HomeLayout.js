import React, { Component } from 'react'
import Footer from '../Footer'
import ProductDemo from './ProductDemo'
import CardProduct from './CardProduct';

export default class HomeLayout extends Component {

    arrProduct =[
        {id: 1, name: 'IPhone', price: 1000, img: 'https://picsum.photos/id/1/200/200'},
        {id: 2, name: 'IPhone X', price: 2000, img: 'https://picsum.photos/id/2/200/200'},
        {id: 3, name: 'IPhone XS', price: 3000, img: 'https://picsum.photos/id/3/200/200'}
    ];




    render() {
        return (
            <div className="container">
                <h3>HomeLayout</h3>
                <input type="text" />

                <Footer bgColor="black" content="FrontEnd"></Footer>
                <Footer bgColor="red" content="BackEnd"></Footer>
                <Footer bgColor="green" content="FullStack"></Footer>
                <Footer bgColor="blue" content="CyberSoft"></Footer>
                <hr/>
                <h3>Product</h3>
                .<div class="row">
                    <div className="col-4">
                        <ProductDemo product={this.arrProduct[0]}></ProductDemo>
                    </div>
                    <div className="col-4">
                        <ProductDemo product={this.arrProduct[2]}></ProductDemo>
                    </div>
                    <div className="col-4">
                        <CardProduct product={this.arrProduct[2]}></CardProduct>
                    </div>
                   
                </div>
            </div>
        )
    }
}
