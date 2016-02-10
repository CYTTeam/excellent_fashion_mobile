import React, {Component} from 'react';
import NavBar from '../layout/NavBar.js';
import Footer from '../layout/Footer.js';
import Slider from 'react-slick';

class MapDetailPage extends Component {
    render() {
        const settings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            className: 'height100',
        };

        const settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            className: 'card',
            dotsClass: 'standard-dots',
        };

        return (
            <div className="main-page">
                <NavBar/>
                <div className="section section1">
                    <Slider {...settings1}>
                        <img src={require('../public/images/main/bg.png')}/>
                        <img src={require('../public/images/main/bg.png')}/>
                    </Slider>
                </div>

                <div className="section section2">
                    <div className="padding-vertical-xxlg text-center">
                        <img src={require('../public/images/main/news_events.png')} width="33%"/>
                    </div>

                    <div className="bg-gray1 padding-bottom-50px">
                        <Slider {...settings2}>
                            <div className="card">
                                <div className="card-img"
                                    style={{'backgroundImage': `url(${require('../public/images/main/new1.png')})`}}>
                                    <div className="time">
                                        11.20
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title">WE HAVE DREAM——3COLOUR 2016 春季新品发布会</h3>
                                    <p>中有拥有梦想，并且为梦想拼命的努力过，当我们想起年轻时的岁月，才不会觉得遗憾。也唯有梦想，才能像最新鲜的阳光一样，照亮我们漫漫的...</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"
                                    style={{'backgroundImage': `url(${require('../public/images/main/new2.png')})`}}>
                                    <div className="time">
                                        11.20
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title">WE HAVE DREAM——3COLOUR 2016 春季新品发布会</h3>
                                    <p>中有拥有梦想，并且为梦想拼命的努力过，当我们想起年轻时的岁月，才不会觉得遗憾。也唯有梦想，才能像最新鲜的阳光一样，照亮我们漫漫的...</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"
                                    style={{'backgroundImage': `url(${require('../public/images/main/new3.png')})`}}>
                                    <div className="time">
                                        11.20
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title">WE HAVE DREAM——3COLOUR 2016 春季新品发布会</h3>
                                    <p>中有拥有梦想，并且为梦想拼命的努力过，当我们想起年轻时的岁月，才不会觉得遗憾。也唯有梦想，才能像最新鲜的阳光一样，照亮我们漫漫的...</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"
                                    style={{'backgroundImage': `url(${require('../public/images/main/new4.png')})`}}>
                                    <div className="time">
                                        11.20
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title">WE HAVE DREAM——3COLOUR 2016 春季新品发布会</h3>
                                    <p>中有拥有梦想，并且为梦想拼命的努力过，当我们想起年轻时的岁月，才不会觉得遗憾。也唯有梦想，才能像最新鲜的阳光一样，照亮我们漫漫的...</p>
                                </div>
                            </div>
                        </Slider>
                        <div className="text-center">
                            <button className="btn more-btn">MORE</button>
                        </div>
                    </div>
                </div>

                <div className="section section3">
                    <div className="padding-vertical-xxlg text-center">
                        <img src={require('../public/images/main/information.png')} width="33%"/>
                    </div>
                    <div className="padding-bottom-50px">
                        <Slider {...settings2}>
                            <div className="card">
                                <div className="card-img2"
                                    style={{'backgroundImage': `url(${require('../public/images/main/info1.png')})`}}>
                                    <div className="text">
                                        GROUP CULTURE
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title2">集团文化</h3>
                                    <p>公司前进的每一步，无论是一大步还是一小步，都要带动行业发展的脚步。</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img2"
                                    style={{'backgroundImage': `url(${require('../public/images/main/info2.png')})`}}>
                                    <div className="text">
                                        PUBLIC BENEFIT
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title2">公益事业</h3>
                                    <p>爱心助学 矢志不渝</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img2"
                                    style={{'backgroundImage': `url(${require('../public/images/main/info3.png')})`}}>
                                    <div className="text">
                                        TALENT DEVELOPMENT
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title2">人才发展</h3>
                                    <p>人的命运不仅在于他的能力，更在于他是否能善待身边的每一个人</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img2"
                                    style={{'backgroundImage': `url(${require('../public/images/main/info4.png')})`}}>
                                    <div className="text">
                                        SHOP
                                    </div>
                                </div>
                                <div className="card-block">
                                    <h3 className="card-title2">商城</h3>
                                    <p>我深谙【女为悦己而容】的姿态，坚持自我主张的同时，我也要赢得众人的认可。</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default MapDetailPage;
