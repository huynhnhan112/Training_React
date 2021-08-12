import React, { Component } from 'react'
//Thư viện kết nối Redux
import {connect} from 'react-redux';



class GioHang extends Component {

    renderGioHang = () => {
        console.log(this.props.gioHang);
        return this.props.gioHang.map((spGH,index)=>{
            return <tr>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt="..." width={50} height={50} /></td>
                <td>{spGH.giaBan}</td>
                <td>
                    <button className="btn btn-outline-primary mr-2" onClick={()=>{
                            const action = {
                                type: 'TANG_GIAM_SO_LUONG',
                                maSPClick:spGH.maSP,
                                soLuong:1
                            }
                            //Gọi hàm dispatch gửi data lên redux
                            this.props.dispatch(action)
                        }}>
                            +
                        </button>
                    {spGH.soLuong}
                    <button className="btn btn-outline-primary ml-2" onClick={()=>{
                         const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick:spGH.maSP,
                            soLuong: -1
                        }
                        //Gọi hàm dispatch gửi data lên redux
                        this.props.dispatch(action)
                    }}>
                        -
                    </button>
                </td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <button className="btn btn-outline-danger" onClick={()=>{
                    //Tạo ra action chứa data gửi lên redux
                    const action = {
                        type: 'XOA_GIO_HANG',
                        maSPClick:spGH.maSP
                    }
                    //Dùng hàm this.props.patch từ redux cung cấp để gửi data lên redux (reducer)
                    this.props.dispatch(action);
                }}>Xóa</button>

            </tr>
        })
    }


    render() {

        console.log(this.props);
        return (
            <div>
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sp</th>
                                                <th>Tên sp</th>
                                                <th>Hình ảnh</th>
                                                <th>Giá bán</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

//Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component

const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangReducers
    }
}

//HOC
const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);

export default ComponentGioHangRedux;