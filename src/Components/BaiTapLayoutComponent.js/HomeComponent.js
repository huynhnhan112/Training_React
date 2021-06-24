import React, { Component } from 'react'


import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
export default class HomeComponent extends Component {


    render() {
        return (
            <div className="container-fuild h-100">
                <div className="row">
                    <div className="col-12">
                        <HeaderComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 h-100">
                        <div className="navigation display-4 d-flex justify-content-center align-items-center">
                            <NavigationComponent />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <ContentComponent />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        )
    }
}
