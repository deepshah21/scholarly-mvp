import React from "react";
import { Grid, Image, List } from "semantic-ui-react";
import LeftTop from './LeftTop';
import Question from './Question'
import RightTop from "./RightTop";

const GridExampleCelledInternally = () => (
  <Grid celled="internally">
    <Grid.Row>
    
      <Grid.Column width={3}>
        <LeftTop/>
      </Grid.Column>
     
      <Grid.Column width={10}>
        <Question/>
      </Grid.Column>
      <Grid.Column width={3}>
        <RightTop/>
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
