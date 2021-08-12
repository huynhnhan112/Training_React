import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('nhân đẹp trai');
    }

    showMessage = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        let name = 'sâm';

        return (
            <div className="container">
                handle event
                <br />
                <button id="btn" onClick={(event) => {
                    // event.target.style.backgroundColor = 'green';
                    // alert(`${name} đẹp trai`);
                    this.showMessage('Nhân');
                }}>Click me</button>
            </div>
        )
    }
}
