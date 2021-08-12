import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart'

export default class ProductListCart extends Component {


    // renderSanPham = () => {
        //     return mangSanPham.map((sanPham,index)=>{
            //         return <div className="col-4" key={index}>
            //                     <div className="card">
            //                             <img src={sanPham.hinhAnh} alt="..." height={350} />
            //                             <div className="card-body bg-dark">
            //                                 <h3>{sanPham.tenSP}</h3>
            //                                 <p>{sanPham.giaBan}</p>
            //                                 <button className="btn btn-success">Xem chi tiết</button>
            //                                 <button className="btn btn-danger ml-5">Thêm giỏ hàng</button>
            //                             </div>
            //                     </div>
            //                 </div>
            //     })
            // }
            
            
    render() {
        let {mangSanPham, themGioHang} = this.props;
        
        return (
            <div className="row">
               {mangSanPham.map((sanPham,index)=>{
                   return <div className="col-4" key={index}>
                       <ProductItemCart sp={sanPham} themGioHang={themGioHang} />
                   </div>
                })}
            </div>
        )
    }
}
