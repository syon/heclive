import React from 'react';

const propTypes = {
  width: React.PropTypes.number,
};

class Container extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="root">
        <div className="appheader">
          <div className="title">HECLIVE</div>
          <div className="subaction">Settings</div>
        </div>
        <div className="appbody">
          <div className="row">
            <div className="circle kotori"></div>
            <div className="circle nico"></div>
            <div className="circle nozomi"></div>
          </div>
          <div className="row">
            <div className="circle maki"></div>
            <div className="circle eli"></div>
            <div className="circle honoka"></div>
          </div>
        </div>
        <div className="appfooter">
          <div className="btn">START</div>
        </div>
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
