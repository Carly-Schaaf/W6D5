import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(tabsArray) {
    super(tabsArray);
    console.log(this.props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0
    };
  }

  handleClick(e) {
    console.log(e.target.getAttribute('className'));
  }

  render() {
    return (
      <div>
      <ul onClick={this.handleClick}>
        {this.props.tabs.map((tab, ind) => {
          return(
            <div key={ind}><Header title={tab.title} ind={ind} /></div>
          );
        })}
      </ul>
      <article>
        {this.props.tabs[this.state.index].content}
      </article>
      </div>
  );
}
}

export default Tabs;
