import React from 'react';
import { Container, Menu, Dropdown, Image, Icon, Input } from 'semantic-ui-react';

export default class NavBar extends React.Component {
  render() {
    return (
        <div className='topBar'>
          <Menu borderless>
            <Container>
              <Menu.Item><Image className="logoimg" src="logo-square.png"/></Menu.Item>
              <Menu.Item position='right' id='home'>HOME</Menu.Item>
              <Menu.Item id='topBar'>MENU</Menu.Item>
              <Menu.Item id='topBar'>OUR STORY</Menu.Item>
              <Menu.Item id='topBar'>PROMO</Menu.Item>
              <Menu.Item id='topBar'>COUPONS</Menu.Item>
              <Menu.Item id='topBar'>FIND A POPEYES:</Menu.Item>
              <Menu.Item>
                <Input placeholder='Enter Your Location'/>
              </Menu.Item>
              <Menu.Item>
                <Dropdown container item text='United States'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Europe</Dropdown.Item>
                    <Dropdown.Item>Africa</Dropdown.Item>
                    <Dropdown.Item>Brazil</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item><Icon fitted bordered color='orange' name='search'/></Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}
