import React from 'react';
import { Container, List, Grid, Image } from 'semantic-ui-react';

export default class BottomMenu extends React.Component {
  render() {
    return (
        <div className="bottomMenu">
          <Container>
            <p className="subscript">Limited time only. *Breast substitution upcharge may apply.</p>
            <Grid container columns={4}>
              <Grid.Column>
                <List>
                  <List.Item><Image src="img1.PNG" size='medium'/></List.Item>
                  <List.Item className="bottomLinks">CATERING</List.Item>
                  <List.Item><p>Planning a picnic, family reunion or tailgating party? Let Popeyes® “Cater the
                    Flavor”!</p></List.Item>
                  <List.Item className="bottomLinks"> Catered Meals > </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><Image src="img2.PNG" size='medium'/></List.Item>
                  <List.Item className="bottomLinks">FRANCHISING</List.Item>
                  <List.Item><p>Learn how you can own your own chicken franchise by becoming a Popeyes franchisee.</p>
                  </List.Item>
                  <List.Item className="bottomLinks"> Popeyes Franchising > </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><Image src="img3.PNG" size='medium'/></List.Item>
                  <List.Item className="bottomLinks">CAREERS</List.Item>
                  <List.Item><p>We’re looking for people who are passionate about what they do. If you’re looking for a
                    place where you can belong, join us.</p></List.Item>
                  <List.Item className="bottomLinks"> Jobs At Popeyes > </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><Image src="img4.PNG" size='medium'/></List.Item>
                  <List.Item className="bottomLinks">GIVING & VOLUNTEERING</List.Item>
                  <List.Item><p>Popeyes Louisiana Kitchen, Inc., gives its time, resources and money to national and
                    international charities that are aligned with our business strategies and the mission of our
                    corporate foundation.</p></List.Item>
                  <List.Item className="bottomLinks"> Corporate Responsibility > </List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
