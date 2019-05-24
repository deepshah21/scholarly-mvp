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
  Comment,Label, Menu
} from "semantic-ui-react";
import { connect } from "react-redux";
import GridExampleCelledInternally from '../student/GridExampleCelledInternally';

class Messages extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
        return (
          <div className="paddingTop">
          <Grid celled="internally">
          <Grid.Column width={4}>
           <Segment> 

          <Menu size='small' pointing vertical >
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              <Label color='teal'>1</Label>
              Inbox
            </Menu.Item>
    
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              <Label>51</Label>
              Spam
            </Menu.Item>
    
            <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
              <Label>1</Label>
              Updates
            </Menu.Item>
          </Menu>
          </Segment>
          </Grid.Column>
          <Grid.Column stretched width={12}>
          <Segment >
            <Menu>
          <Menu.Item>
              <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
            </Menu>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
        </Grid.Column>
        </Grid>
          </div>
        )
        }

      // <Grid celled>
      //   <Grid.Row>
      //     <Grid.Column width={3}>
      //       <div>
      //       <div>
      //        <Button
      //             content="create"
      //             labelPosition="right"
      //             icon="edit"
      //             primary
      //           />
      //         </div><br/>
      //        <div>
      //        <Button
      //             content="Inbox"
      //             labelPosition="right"
      //             icon="inbox"
      //             primary
      //           />
      //         </div><br/>
      //         <div>
      //        <Button
      //             content="draft"
      //             labelPosition="right"
      //             icon="save"
      //             primary
      //           />
      //         </div><br/>
      //         <div>
      //        <Button
      //             content="starred"
      //             labelPosition="right"
      //             icon="star outline"
      //             primary
      //           />
      //         </div><br/>
      //         <div>
      //        <Button
      //             content="Trash"
      //             labelPosition="right"
      //             icon="trash"
      //             primary
      //           />
      //         </div><br/>
              
      //         </div>
      //     </Grid.Column>
      //     <Grid.Column width={13}>
      //       <Segment>
      //     <Search />
      //       <Comment.Group size="small">
      //         <Header as="h3" dividing>
      //           Small Comments
      //         </Header>

      //         <Comment>
      //           <Comment.Avatar
      //             as="a"
      //             src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
      //           />
      //           <Comment.Content>
      //             <Comment.Author as="a">Matt</Comment.Author>
      //             <Comment.Metadata>
      //               <span>Today at 5:42PM</span>
      //             </Comment.Metadata>
      //             <Comment.Text>How artistic!</Comment.Text>
      //             <Comment.Actions>
      //               <a>Reply</a>
      //             </Comment.Actions>
      //           </Comment.Content>
      //         </Comment>
              
      //       </Comment.Group>
      //       </Segment>
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>,
      // <GridExampleCelledInternally/>
    
    
  }


export default connect()(Messages);
