import React, { Component } from 'react'
import { connect } from 'react-redux';
//Kết nối dữ liệu đến redux


class SanPham extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card text-center">
                <img className="w-100" height={300} src={sanPham.hinhAnh} alt="..." />
                <div className="card-body bg-dark text-light">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-outline-success" onClick={
                    ()=>{
                        const action = {
                            type: 'THEM_GIO_HANG', //Thuộc tính bắt buộc để xác định xử lý
                            sanPhamClick:sanPham
                        }

                        //Đưa dữ liệu lên Redux
                        this.props.dispatch(action);

                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}


//Kết nối Redux
export default connect()(SanPham);