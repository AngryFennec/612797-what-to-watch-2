import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.changeActiveItemHandler = this.changeActiveItemHandler.bind(this);
      this.state = {
        activeItem: -1,
      };
    }

    changeActiveItemHandler(id = -1) {
      this.setState({
        activeItem: id,
      });
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        onChangeActiveItem={this.changeActiveItemHandler}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
