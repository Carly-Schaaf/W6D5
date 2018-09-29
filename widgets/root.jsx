import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => {
  // const tabs = [{title: "title1", content: "cats"}, {title: "dogs", content: "more dogs"}, {title: "fish", content: "goldfish"}];
  return (
   <div>
    <div><Clock /></div>
    <div><Tabs tabs={[{title: "title1", content: "cats"}, {title: "dogs", content: "more dogs"}, {title: "fish", content: "goldfish"}]}/></div>
  </div>);
};

export default Root;
