import React, {Component} from 'react';
import Slider from 'react-slick';

const requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

class Footer extends Component {
    handleScollTopClick = (event) => {
        this.scrollTop(event.target, 1000);
    };

    scrollTop = (node, duration) => {
        const start = node.offsetTop;
        const end = 0;
        const startTime = + new Date();
        this.setScollValue(start, end, startTime, duration);
    };

    setScollValue = (start, end, startTime, duration) => {
        const body = document.body;
        const nowTime = new Date().getTime();
        const p = (nowTime - startTime) / duration;
        const pos = this.swing(p);
        const value = start + pos * (end - start);
        if (p >= 1) {
            body.scrollTop = end;
        } else {
            body.scrollTop = value;
            requestFrame(this.setScollValue.bind(this, start, end, startTime, duration));
        }
    };

    swing = (p) => {
        return 0.5 - Math.cos(p * Math.PI) / 2;
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };

        return (
            <div className="footer ">
                <div className="footer-brands border-vertical-gray padding-vertical-xxlg">
                    <Slider {...settings}>
                        <div>
                            <img className="center-block" style={{marginTop: '5px'}} src={require('../public/images/footer/logo1.png')} width="120" />
                        </div>
                        <div className="text-center">
                            <img className="center-block" src={require('../public/images/footer/logo2.png')} width="110"/>
                        </div>
                        <div className="text-center">
                            <img className="center-block" src={require('../public/images/footer/logo3.png')} width="100"/>
                        </div>
                        <div className="text-center">
                            <img className="center-block" src={require('../public/images/footer/logo4.png')} width="80"/>
                        </div>
                        <div className="text-center">
                            <img className="center-block" style={{marginTop: '5px'}} src={require('../public/images/footer/logo5.png')} width="130"/>
                        </div>
                    </Slider>
                </div>
                <div className="text-center bg-gray2 padding-vertical-xxlg">
                    <img src={require('../public/images/footer/top.png')}
                        onClick={this.handleScollTopClick} />
                </div>
                <div className="text-center">
                    <img className="logo" src={require('../public/images/footer/footerlogo.png')} />
                    <img className="design" src={require('../public/images/footer/footerdesign.png')} />
                </div>
            </div>
        );
    }
}

export default Footer;
