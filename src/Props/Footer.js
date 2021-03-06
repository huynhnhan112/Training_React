import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        /*
            this.props: là 1 thuộc tính có sẵn của react class cpmponent dùng để nhận giá trị
            từ component cha truyền vào (component sử dụng thẻ này)
        */

        console.log('this.props', this.props);

        return (
            <div style={{backgroundColor: this.props.bgColor}} className="m-2 text-white text-center">
                {this.props.content}
            </div>
        )
    }
}
