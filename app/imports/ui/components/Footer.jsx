import React from 'react';
import { Container, Image, Icon, List, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
export default class Footer extends React.Component {
  render() {
    return (
        <Container>
          <Grid container columns={2}>
            <Grid.Column width={10} className="bottomLinks">
              <List horizontal className="nav-link">
                <List.Item>Company</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Franchise Opportunities</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Careers</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Contact Us</List.Item>
              </List>
              <br/>
              <List horizontal className="nav-link-2">
                <List.Item>Terms of Use</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Accessibility Statement</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Privacy Policy</List.Item>
                <List.Item>|</List.Item>
                <List.Item>Sitemap</List.Item>
              </List>
              <p color='black' id="tm">TM & © 2019 Popeyes Louisiana Kitchen, Inc. All Rights Reserved.</p>
              <br/>
              <List horizontal id="icons">
                <List.Item><Icon circular color='orange' name='facebook' size='big'/></List.Item>
                <List.Item><Icon circular color='orange' name='twitter' size='big'/></List.Item>
                <List.Item><Icon circular color='orange' name='youtube' size='big'/></List.Item>
                <List.Item><Icon circular color='orange' name='instagram' size='big'/></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image className="lousianaLogo" src="la-entertainment-logo.svg"/>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
