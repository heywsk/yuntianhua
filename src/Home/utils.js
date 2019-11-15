
import React from 'react';
import { Button } from 'antd';
import Zmage from 'react-zmage';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/;
export const base64Img = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && (item.children.match(isImg) || item.children.match(base64Img) )
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
 // return React.createElement(tag, { key: i.toString(), ...item }, children);
 return item.zmage ? React.createElement(tag, { key: i.toString(), ...item }, <Zmage src={item.children} />) : React.createElement(tag, { key: i.toString(), ...item }, children);
};
