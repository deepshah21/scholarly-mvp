import React from "react";
import { Grid, Image, List } from "semantic-ui-react";

const GridExampleCelledInternally = () => (
  <Grid celled="internally">
    <Grid.Row>
      <Grid.Column width={3}>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
              <List.Description as="a">Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
              <List.Description as="a">Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
              <List.Description as="a">Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="/images/wireframe/centered-paragraph.png" />
      </Grid.Column>
      <Grid.Column width={3}>
      <List>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Krowlewskie Jadlo</List.Header>
        <List.Description>
          An excellent polish restaurant, quick delivery and hearty, filling meals.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Xian Famous Foods</List.Header>
        <List.Description>
          A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
          and lamb burgers.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Sapporo Haru</List.Header>
        <List.Description>Greenpoint's best choice for quick and delicious sushi.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Enid's</List.Header>
        <List.Description>At night a bar, during the day a delicious brunch spot.</List.Description>
      </List.Content>
    </List.Item>
  </List>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src="/images/wireframe/image.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleCelledInternally;
