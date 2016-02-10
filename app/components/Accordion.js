import React, {PropTypes, Component} from 'react';
import classPrefix from '../decorators/classPrefix';


/*
 *   react component Accordion
 * */

@classPrefix('accordion') class Accordion extends Component {
    static propTypes = {
        defaultActiveKey: PropTypes.number,
        children: PropTypes.node,
    };

    static defaultProps = {
        defaultActiveKey: -1,
    };

    state = {
        activeKey: this.props.defaultActiveKey,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        });
    }

    handleChanged = (itemKey) => {
        //  传给子组件，建立连接
        let key = itemKey;
        if (this.state.activeKey === key) {
            key = null;
        }

        this.setState({
            activeKey: key,
        });
    };


    render() {
        const {activeKey} = this.state;
        const children = React.Children.map(this.props.children, (child, index) => {
            const props = {
                eventKey: index,
                handleChanged: this.handleChanged,
                open: activeKey === index,
            };
            return React.cloneElement(child, props);
        });


        return (
            <ul className={this.getPrefix()}>
                {children}
            </ul>
        );
    }
}

export default Accordion;
