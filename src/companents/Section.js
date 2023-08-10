import React from 'react'
import Png from './assets/Rectangle full.png'

const Main = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="box">
                                <img src={Png} alt=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h2>Always in style!</h2>
                                <p className="first-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit itaque neque nobis perferendis quidem ut. At eligendi porro quaerat veritatis.</p>
                                    <p>$ 249.99 <span className="span">$ 249.99</span></p>
                                <p className="p-star">★★★★</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Main