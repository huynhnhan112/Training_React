import React, { Component } from 'react'

export default class ProductDemo extends Component {

    render() {
        //this.props: thuộc tính có sẵn của rcc
        /*
            Phân biệt (sự khác biệt) giữa state và props:
            + Giống nhau: cả 2 đều là thuộc tính có sẵn của react class component để
            binding dữ liệu hiển thị lên giao diện.
            + Khác nhau: 
            this.state dùng để chứa các giá trị thay đổi trên giao diện và có thể gán
            lại được thông qua phương thức setState.
            this.props dùng để nhận giá trị từ component (nơi sử dụng thẻ đó) truyền vào
            và không thể gán lại giá trị đó. 
        
        
        */

        let {product} = this.props;

        return (

            <div className="card text-center">
                <img src={product.img} alt="..." />
                <div classname="card-body bg-dark text-white">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>


        )
    }
}
