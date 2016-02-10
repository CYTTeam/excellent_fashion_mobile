import React, {Component, PropTypes} from 'react';
import move from 'move-js';
import Accordion from '../components/Accordion.js';
import AccordionItem from '../components/AccordionItem.js';

class NavBar extends Component {
    static propTypes = {
        open: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        open: false,
    };


    state = {
        open: this.props.open,
    };

    handleNavbarToggle = (open) => () => {
        if (this.collapsing) return;
        if (open) {
            this.setState({open: true}, this._openNavList);
        } else {
            this.setState({open: false}, this._closeNavList);
        }
    };

    _openNavList = () => {
        const navlist = this.refs.navlist;
        move(navlist)
            .set('height', '100%')
            .end(() => {
                this.collapsing = false;
            });
    };

    _closeNavList = () => {
        const navlist = this.refs.navlist;
        move(navlist)
            .set('height', 0)
            .duration('0.3s')
            .ease('in-out')
            .end(() => {
                this.collapsing = false;
            });
    };

    render() {
        const open = this.state.open;
        return (
            <div>
                <div className="navbar">
                    <img className="logo" src={require('../public/images/navbar/headerlogo.png')}/>
                    <span className="navbar-toggle"
                          onClick={this.handleNavbarToggle(!open)}>
                        <img className={open ? 'hide' : ''} src={require('../public/images/navbar/menu.png')}/>
                        <img className={open ? '' : 'hide'} src={require('../public/images/navbar/close.png')}/>
                    </span>
                </div>
                <div className="navlist" ref="navlist">
                        <Accordion>
                            <AccordionItem title="关于卓尚">
                                <ul>
                                    <li className="list-group-item"><a>集团文化</a></li>
                                    <li className="list-group-item"><a>发展历史</a></li>
                                    <li className="list-group-item"><a>集团荣誉</a></li>
                                    <li className="list-group-item"><a>董事长致辞</a></li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="旗下品牌">
                                <ul>
                                    <li className="list-group-item"><a>集团文化</a></li>
                                    <li className="list-group-item"><a>发展历史</a></li>
                                    <li className="list-group-item"><a>集团荣誉</a></li>
                                    <li className="list-group-item"><a>董事长致辞</a></li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                </div>
            </div>
        );
    }
}

export default NavBar;
