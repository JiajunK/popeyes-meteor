import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BigImg extends React.Component {
  render() {
    return (
        <div className="bigImage">
          <Image src="2-can-dine.jpg" fluid/>
        </div>
    );
  }
}
