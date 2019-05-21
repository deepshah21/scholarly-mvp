import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Segment,
  Table,
  Grid,
  Image,
  Search,
  Comment,
} from "semantic-ui-react";
import { connect } from "react-redux";

class Messages extends Component {
  render() {
    return [
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <div>
            <div>
             <Button
                  content="create"
                  labelPosition="right"
                  icon="edit"
                  primary
                />
              </div><br/>
             <div>
             <Button
                  content="Inbox"
                  labelPosition="right"
                  icon="inbox"
                  primary
                />
              </div><br/>
              <div>
             <Button
                  content="draft"
                  labelPosition="right"
                  icon="save"
                  primary
                />
              </div><br/>
              <div>
             <Button
                  content="starred"
                  labelPosition="right"
                  icon="star outline"
                  primary
                />
              </div><br/>
              <div>
             <Button
                  content="Trash"
                  labelPosition="right"
                  icon="trash"
                  primary
                />
              </div><br/>
              
              </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment>
          <Search />
            <Comment.Group size="small">
              <Header as="h3" dividing>
                Small Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              
            </Comment.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default connect()(Messages);
