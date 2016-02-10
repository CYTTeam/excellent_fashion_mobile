import React from 'react';
import classPrefix from '../decorators/classPrefix';
import classNames from 'classnames';
import move from 'move-js';


/*
 *   react component Accordion.Item
 * */

@
classPrefix('accordion-item') class AccordionItem extends React.Component {
  static propTypes = {
      eventKey: React.PropTypes.number,
      title: React.PropTypes.string.isRequired,
      handleChanged: React.PropTypes.func,
      open: React.PropTypes.bool,
      children: React.PropTypes.node,
  };

  static defaultProps = {
      open: false,
  };

  state = {
      open: this.props.open,
  };


  componentDidMount() {
      const node = this.refs.itemContent;
      const accordionItem = this.refs.accordionItem;
      const open = this.state.open;
      if (!open) {
          node.style.height = 0 + 'px';
          accordionItem.classList.add('accordion-close');
      } else {
          node.style.height = node.scrollHeight + 'px';
          accordionItem.classList.add('accordion-open');
      }
  }

  componentWillReceiveProps(nextProps) {
      const open = this.state.open;
      if (nextProps.open !== this.props.open) {
          if (open) {
              this.setState({open: false}, this._handleCollapse);
          } else {
              this.setState({open: true}, this._handleExpand);
          }
      }
  }

  shouldComponentUpdate(nextProps) {
      return this.props.open !== nextProps.open;
  }


  handleAccordionItemClick = () => {
      const {handleChanged, eventKey} = this.props;
      if (handleChanged) {
          handleChanged(eventKey);
      }
  };

  _handleExpand = () => {
      const node = this.refs.itemContent;
      const accordionItem = this.refs.accordionItem;
      accordionItem.classList.remove('accordion-close');
      accordionItem.classList.add('accordion-open');
      //  获得panel元素auto的高度
      const height = node.scrollHeight;
      move(node)
        .set('height', height + 'px')
        .end(() => {
            this.collapsing = false;
        });
  };


  _handleCollapse = () => {
      const node = this.refs.itemContent;
      const accordionItem = this.refs.accordionItem;
      const complete = () => {
          accordionItem.classList.remove('accordion-open');
          accordionItem.classList.add('accordion-close');
          this.collapsing = false;
      };
      move(node)
        .set('height', 0)
        .end(complete);
  };


  render() {
      const addPrefix = this.addPrefix;
      const props = this.props;

      const itemHeader = React.createElement(
        'div', {
            onClick: this.handleAccordionItemClick,
            className: classNames('card-header', addPrefix('hd')),
        },
        props.title
      );

      const itemContent = React.createElement(
          'div',
          {
              ref: 'itemContent',
              className: classNames({
                  [addPrefix('bd')]: true,
              }),
          },
          props.children
      );

      const itemClassName = classNames('card', this.getPrefix());
      return (
          <li className = {itemClassName} ref="accordionItem">
              {itemHeader}
              {itemContent}
          < /li>
      );
  }
}

export default AccordionItem;
