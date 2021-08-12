

const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'nguyenvana',hoTen:'Nguyễn Văn A',matKhau:'123456789',
        email:'nguyenvana@gmail.com',soDienThoai:'0909090909',maLoaiNguoiDung:'KhachHang'},
        {taiKhoan:'nguyenvanb',hoTen:'Nguyễn Văn B',matKhau:'987654321',
        email:'nguyenvanb@gmail.com',soDienThoai:'0808080808',maLoaiNguoiDung:'KhachHang'}
    ],
    nguoiDungChinhSua: [
        {taiKhoan:'nguyenvana',hoTen:'Nguyễn Văn A',matKhau:'123456789',
        email:'nguyenvana@gmail.com',soDienThoai:'0909090909',maLoaiNguoiDung:'KhachHang'},
        {taiKhoan:'nguyenvanb',hoTen:'Nguyễn Văn B',matKhau:'987654321',
        email:'nguyenvanb@gmail.com',soDienThoai:'0808080808',maLoaiNguoiDung:'KhachHang'}
    ],
    nguoiDung: {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            maLoaiNguoiDung: 'KhachHang'
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            maLoaiNguoiDung: 'KhachHang'
        }
    }
}


export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){

        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung]
            // state.mangNguoiDung.push(action.nguoiDung)

            return {...state}
        }

        case 'XOA_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung];

            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan);

            return {...state};
        }

        case 'CHINH_SUA': {
            state.nguoiDung.values = action.nguoiDungChinhSua;
            state.nguoiDung = {...state.nguoiDung}

            return {...state};
        }

        case 'CAP_NHAT_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung];

            // Tìm ra người dùng cần cập nhật
            let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nguoiDung=>nguoiDung.taiKhoan ===
                action.nguoiDungCapNhat.taiKhoan);

            if(nguoiDungCapNhat){
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.email;
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.soDienThoai;
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.matKhau;
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.maLoaiNguoiDung;

            }

            state.mangNguoiDung = mangNguoiDungCapNhat;
            return {...state};

        }

        default: return state;
    }
}