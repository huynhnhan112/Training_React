import React, { Component } from 'react'



export default class StateDemo extends Component {

    /*
        Thuộc tính State
        + Là thuộc tính có sẵn của react class component, dùng để chứa giá trị thay đổi trên giao diện
        khi user thao tác (click, keyup, keydown, blur, ...)
    
    */

    state = {
        isLogin: false,
        fSize: 15,
        imgSrc: './img/CarBasic/products/red-car.jpg'
    }


    // isLogin = false;
    username = 'Lê Sâm';

    renderLogin = () => {
        if(this.state.isLogin){
            return <span className="font-weight-bold text-white">Hello {this.username}</span>
        }

        return <button className="btn btn-outline-success" onClick={()=>{
            this.handelLogin();
        }}>Đăng nhập</button>
    }


    handelLogin = () => {
        // this.state.isLogin = true; 

        //không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
        // //Thay đổi giá trị và render giao diện
         
        this.setState({
            isLogin: true
        });
    }
    /*
        this.setState(newState);
            + Phương thức này do react class component cung cấp. Dùng để thay đổi giá trị state
            + setState được gọi thì giao diện sẽ được render lại (hàm render sẽ chạy lại)
            + Phương thức setState là phương thức bất đồng bộ
    */


    handleChangeColor = (color) => {
        this.setState({
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul> */}
                        {/* <div className="form-inline my-2 my-lg-0"> */}
                            {/* {this.isLogin ? <span className="font-weight-bold text-white">Hello {this.username}</span> : 
                            <button className="btn btn-outline-success">Đăng nhập</button>} */}
{/* 
                            {this.renderLogin()}
                        </div>
                    </div>
                </nav>
             */}
                <br></br>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* {this.isLogin ? <span className="font-weight-bold text-white">Hello {this.username}</span> : <button 
                            className="btn btn-outline-success">Đăng nhập</button>} */}
                            {this.renderLogin()}
                        </form>
                    </div>
                </nav>

                <hr />
                <div className="container">
                    <h3>Bài tập tăng giảm font chữ</h3>
                    <p style={{fontSize: `${this.state.fSize}px`}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis suscipit nisi ea quidem sequi velit!
                    </p>
                    
                    <button className="btn btn-outline-success mr-2" onClick={()=>{
                        let newFontSize = this.state.fSize + 2
                        this.setState({
                            fSize: newFontSize
                        })
                    }}>
                        +
                    </button>
                    <button className="btn btn-outline-success" onClick={()=>{
                        this.setState({
                            fSize: this.state.fSize - 2
                        })
                    }}>
                        -
                    </button>
                </div>
                <hr />

                <div className="container">
                    <h3>Bài tập chọn xe</h3>
                    <div className="row">
                        <div className="col-6">
                            <img src={this.state.imgSrc} alt="Ảnh xe" className="w-100" />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <button style={{background: 'red'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('red')
                                    }}>Red</button>
                                </div>
                                <div className="col-3">
                                    <button style={{background: 'silver'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('silver')
                                    }}>Silver</button>
                                </div>
                                <div className="col-3">
                                    <button style={{background: 'black'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('black')
                                    }}>Black</button>
                                </div>
                                <div className="col-3">
                                    <button style={{background: 'gray'}} className="btn text-white" onClick={()=>{
                                        this.handleChangeColor('steel')
                                    }}>Steel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


