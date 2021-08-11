import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    arrProduct = [
        { id: 1, name: 'IPhone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
        { id: 2, name: 'IPhone X', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
        { id: 3, name: 'IPhone XS', price: 3000, img: 'https://picsum.photos/id/3/200/200' }
    ];

    renderProduct = () => {
        // Cách 1
        // let content = [];
        // for(let i = 0; i < this.arrProduct.length; i++){
        //     let product = this.arrProduct[i];
        //     let tagTr = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td><img src={product.img} alt="..."/></td>
        //         <td>{product.price}</td>

        //     </tr>;

        //     content.push(tagTr);
        // };
        // return content;

        let content = this.arrProduct.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img src={product.img} alt="..." /></td>
                <td>{product.price}</td>
            </tr>
        });
        return content;
    }

    renderProductCard = () => {
        let content = this.arrProduct.map((product,index) => {
            return <div className="col-4">
                <div className="card">
                    <img src={product.img} alt="..." />
                    <div className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                    </div>
                </div>
            </div>
        });
        return content;
    }

    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {[<tr><td>1</td></tr>, <tr><td>2</td></tr>]} */}
                        {this.renderProduct()}
                    </tbody>
                </table>
                <hr/>
                <h3>Danh sách sản phẩm</h3>
                <div className="row text-center">
                    {this.renderProductCard()}
                </div>
            </div>
        )
    }
}
