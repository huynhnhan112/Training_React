import React, { Component } from 'react'
import ProductItems from './ProductItems';
import Modal from './Modal';


export default class ProductList extends Component {

    renderProductList = () => {
        //Lấy ra mảng sản phẩm từ component cha truyền vào thông qua propName
        let {productsData, viewDetail} = this.props;
        return productsData.map((product,index)=>{
            return <div className="col-3" key={index}>
                <ProductItems item={product} viewDetail={viewDetail} />
            </div>
        })
    }



    render() {
        return (
            <div className="container-fluid"> 
                <div className="row">
                   {this.renderProductList()}
                </div>
            </div>
        )
    }
}
