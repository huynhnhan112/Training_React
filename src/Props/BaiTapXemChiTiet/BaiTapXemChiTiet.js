import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapXemChiTiet extends Component {

    mangDienThoai = [
    
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },

        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
        , "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: 
            { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    }


    renderSanPham = () => {
        //callback function là 1 hàn chưa được gọi đóng vai trò là 1 tham số truyền đi, và sẽ
        // được gọi tại hàm hoặc component nhận hàm này.
        return this.mangDienThoai.map((sanPham,index)=>{
            return <div className="col-4 text-center" key={index}>
                        {/* <div className="card">
                            <img src={sanPham.hinhAnh} alt="..." height={350} />
                            <div className="card-body bg-dark text-light">
                                <h3>{sanPham.tenSP}</h3>
                                <p>{sanPham.giaBan.toLocaleString()}</p>
                                <button className="btn btn-outline-success" onClick={()=>{
                                    this.xemChiTiet(sanPham);
                                }}>Xem chi tiết</button>
                            </div>
                        </div> */}
                    <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} />
            </div>
        })
    }

    xemChiTiet = (sanPhamClick) => {
        console.log('sanPhamClick', sanPhamClick);

        //set lại state khi click
        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
    }


    render() {
        let {sanPhamChiTiet} = this.state; //bóc tách thuộc tính sanPhamChiTiet từ state
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                    {/* <div className="col-4">
                            <div className="card">
                                <img src="https://picsum.photos/200/200" alt="..." />
                                <div className="card-body">
                                    <h3>Tên sản phẩm</h3>
                                    <p>1000</p>
                                    <button className="btn btn-success">Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                     */}
                </div>
                <div className="row mt-5">
                    <div className="col-4 text-center">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt="..." width="350" height="300" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table table-bordered">
                            <tr>
                                <th>Màn hình</th>
                                <th>{sanPhamChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <th>{sanPhamChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Trước</th>
                                <th>{sanPhamChiTiet.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{sanPhamChiTiet.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{sanPhamChiTiet.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{sanPhamChiTiet.rom}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
