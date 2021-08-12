import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        let {banChon, soBanThang, soBanChoi} = this.props;
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn: <span className="text-warning">{banChon ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary">{soBanChoi}</span>
                </div>
                <button className="btn bg-success">
                    <div className="display-4" onClick={()=>{
                        const action = {
                            type: 'PLAY_GAME'
                        }

                        this.props.dispatch(action);
                    }}>Play game</div>
                </button>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {

    return{
        banChon: rootReducer.baiTapGameXucXacReducer.banChon,
        soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
        soBanChoi: rootReducer.baiTapGameXucXacReducer.soBanChoi
    }
}



export default connect(mapStateToProps)(KetQuaTroChoi);