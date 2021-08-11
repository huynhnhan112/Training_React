import React, { Component } from 'react'

export default class Demo extends Component {

    name = 'Sĩ';

    renderName = () => {
        // this.name
        return this.name = 'abc';
    }

    render() {
        let productName = 'nhân';

        let product ={
            name: 'Iphone X',
            price: 5000, 
        }



        return (
            <div className="container">
                <div className="card w-25 bg-dark text-white">
                    <img src="https://picsum.photos/200/200" />
                    <div className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
