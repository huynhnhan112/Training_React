import React, { Component } from 'react'

export default class Databinding extends Component {
    //Thuộc tính
    // name = "Nhân";
    // img = "https://picsum.photos/id/10/200/200"

    //Phương thức
    renderCard() {
        let product = {
            id: 1,
            name: 'Iphone',
            price: 1000,
            img: "https://picsum.photos/id/10/200/200"
        }
        return <div className="card w-25">
            <img src={product.img} alt="..." />
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
        </div>
    }

    render() {
        //Khai báo biến, hàm {Khai báo sẽ có let var const và được khai báo trong hàm và phương thức}
        // let tenHocVien = "Nhân";



        return (
            <div className="container">
                {/* <div id="content">{tenHocVien}</div> 
                <div id="content">{this.name}</div> */}
                <div className="card w-25">
                    <img src={this.img} alt="..." />
                </div>
                {this.renderCard()}
            </div>
        )
    }
}
