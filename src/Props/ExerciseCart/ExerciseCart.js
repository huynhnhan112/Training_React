import React, { Component } from 'react'
import Cart from './Cart'
import ProductListCart from './ProductListCart'




export default class ExerciseCart extends Component {

    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        gioHang: [
            // {maSP:1, tenSP:'I Phone', giaBan:1000, soLuong:1,
            // hinhAnh:'https://picsum.photos/200/200'}
        ]
    }   

    themGioHang = (spClick) => {
        console.log(spClick);
        //Khi click vào sp thêm vào thuộc tính số lượng
        let spGioHang = {...spClick,soLuong:1};
        //Lấy sản phẩm đó thêm vào mảng giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];

        //Kiểm tra sản phầm vừa click có tồn tại trong mảng giỏ hàng hay chưa
        let spGH = gioHangCapNhat.find(sp=>sp.maSP === spGioHang.maSP);

        if(spGH){ //tìm thấy
            spGH.soLuong += 1;
        }else{ //không tìm thấy
            gioHangCapNhat.push(spGioHang); // thêm vào giỏ hàng
            // gioHangCapNhat = [...gioHangCapNhat,spGioHang];
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSPClick) => {
        console.log('maSPClick',maSPClick);

        //let gioHangCapNhat = [...this.state.gioHang];
        let {gioHang} = this.state;
        //Tìm ra vị trí phần tử trong mảng có cùng maSP với maSPClick
        let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
        if(index !== -1){ //tìm thấy
            gioHang.splice(index, 1); //xóa phần tử tại vị trí tìm thấy
        } 

        //Xử lý setState => Cập nhật lại giỏ hàng
        this.setState({
            gioHang: gioHang
        })
    }

    tangGiamSoLuong = (maSPClick,soLuong) => {
        console.log(maSPClick,soLuong)
        let {gioHang} = this.state;

        let spTangGiam = gioHang.find((product)=> product.maSP === maSPClick);
        console.log(spTangGiam);
        //Tìm ra sản phẩm tăng giảm
        if(spTangGiam) {
            // 2 + -1 = 1
            spTangGiam.soLuong += soLuong;
            if(spTangGiam.soLuong < 1){
                alert('Số lượng tối thiểu là 1!');
                spTangGiam.soLuong -= soLuong;
            }
        }
        //Cập nhật lại state giỏ hàng
        this.setState({
            gioHang: gioHang
        })
    }

    tinhTongSoLuong = () => {
        let {gioHang} = this.state;
        let tongSoLuong = gioHang.reduce((soLuong, sanPham, index)=>{
            return soLuong += sanPham.soLuong;
        }, 0);

        return tongSoLuong.toLocaleString();
    }

    tinhTongTien = () => {
        let {gioHang} = this.state;
        let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
            return thanhTien += sanPham.soLuong * sanPham.giaBan;
        }, 0);

        return tongTien.toLocaleString();
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập giỏ hàng</h3>
                <div className="text-right">
                    <span 
                        style={{cursor:'pointer'}} className="text text-danger font-weight-bold" 
                        data-toggle="modal" data-target="#modelId">
                            Giỏ hàng({this.tinhTongSoLuong()} - {this.tinhTongTien()})
                    </span>
                </div>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <ProductListCart themGioHang={this.themGioHang} mangSanPham={this.dataPhone} />
            </div>
        )
    }
}
