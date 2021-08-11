import {combineReducers, createStore} from 'redux';

import { gioHangReducers } from './reducer/gioHangReducer';
import { baiTapGameXucXacReducer } from './reducer/baiTapXucXacReducer';
import {baiTapQuanLyNguoiDungReducer} from './reducer/baiTapQuanLyNguoiDungReducer';

//state trong redux là Reducer
const rootReducer = combineReducers({
    //Các state ứng dụng được lưu tại đây
    gioHangReducers : gioHangReducers,
    baiTapGameXucXacReducer,
    baiTapQuanLyNguoiDungReducer
    
});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);