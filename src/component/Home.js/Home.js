import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css'
import prideing from '../../assets/1.png'
import ingredients from '../../assets/2.png'
import price from '../../assets/01.jpg'
import price1 from '../../assets/02.jpg'
import price2 from '../../assets/03.jpg'
import Date from "../../Date";
import {Carousel} from 'react-bootstrap';
import item1 from '../../assets/1.jpg'
import item2 from '../../assets/2.jpg'
import item3 from '../../assets/1.jpg'
const Home=()=>{
    const blogitem=Date.map((item)=>{
        return(
            <div className="col-md-4">
                <img src={item.img}/>
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                <button>Order Now</button>
            </div>
        )
    })
    return(
        <Fragment>
            <Header/>
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1278+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={prideing} title="prideing"/>
                            </div>
                            <div className="col-md-6">
                                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                                <button><a>learn more</a></button>
                            </div>

                        </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button>
                                <a>learn More</a>
                            </button>

                        </div>
                        <div className="col-md-6">
                            <img src={ingredients} title="ingredients"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-action">
                <div className="container">
                    <h2>When a man's stomach is full it makes no 
                        difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
                    <button><a href="https://www.flaticon.com/free-icons/play-button" title="play button icons"> Watch Our Story</a></button>
                </div>
            </section>
            <section className="explore">
                <div className="container">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

                    <div className="row">
                        {/* <div className="col-md-4">
                            <img src={price} title="price"/>
                            <h4>Rainbow Vegetable Sandwich</h4>
                            <p>Time: 15 - 20 Minutes | Serves: 1</p>
                            <h3>$10.50 <span>$11.70</span></h3>
                            <button >Order Now</button>
                        </div>
                        <div className="col-md-4">
                            <img src={price1} title="price"/>
                            <h4>Vegetarian Burger</h4>
                            <p>Time: 30 - 45 Minutes | Serves: </p>
                            <h3>$9.20  <span>$10.50</span></h3>
                            <button >Order Now</button>
                        </div>
                        <div className="col-md-4">
                            <img src={price2} title="price"/>
                            <h4>Raspberry Stuffed French Toast</h4>
                            <p>Time: 10 - 15 Minutes | Serves: 1</p>
                            <h3>$12.50  <span>$13.20</span></h3>
                            <button >Order Now</button>
                        </div> */}

                        {blogitem}
                    </div>
                </div>
            </section>

            <section className="silder">
                <div className="container">
                    <h2>Testimonials</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img src={item1} title="item1" />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={item2} title="item2" />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
            </section>
            <section className="frequently">
                <div className="container">
                    <div className="row">
                        <h2>Frequently Asked Questions</h2>
                        <div className="col-md-6">
                                <p> Is Foodera Bread really baked fresh each day?</p>
                                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>

                        </div>
                        <div className="col-md-6">
                                <p> Is Foodera Bread really baked fresh each day?</p>
                                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                                
                        </div>
                        <div className="col-md-6">
                                <p> Is Foodera Bread really baked fresh each day?</p>
                                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                                
                        </div>
                        <div className="col-md-6">
                                <p> Is Foodera Bread really baked fresh each day?</p>
                                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                                
                        </div>
                    </div>
                </div>
            </section>
            <section className="search">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                            <p>Limited time offer for this month. No credit card required.</p>
                            <input type="text" placeholder="Email Address here"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>

    )
}
export default Home;