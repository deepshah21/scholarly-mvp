import React from "react";
import {Item,Icon,Segment } from "semantic-ui-react";

const Question = () => (
    <Segment>
    <Item.Group link>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          Deep Shah
        </Item.Header>
        <Item.Description>This is paragraph.</Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    </Segment>
);

export default Question;

