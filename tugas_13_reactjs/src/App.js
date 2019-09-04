import React, {Component} from 'react' ;
import 'semantic-ui-css/semantic.min.css';
import { 
  Grid, 
  Button, 
  Divider, 
  Header, 
  Image, 
  Icon, 
  Label,
  Segment,
  Search,
  Dimmer,
  Loader,
  Placeholder,
  List,
  Table,Input,
  Menu} from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <Segment placeholder>
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>Or</Divider>
  
              <Grid.Row>
                <Grid.Column>
                  <Header icon>
                    <Icon name="search" />
                    Cari document
                  </Header>
  
                  <Search placeholder="search document..." />
                </Grid.Column>
                <Grid.Column>
                  <Header icon>
                    <Icon name="file pdf outline" />
                    Tambah Document Baru
                  </Header>
                  <Button primary>Create Document</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
          <Grid columns={3} >
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
  
            <Grid.Column width={7}>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
  
            <Grid.Column width={3}>
              <h3>Website Terkait</h3>
              <List>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.google.com">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.facebook.com">facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www/semantic-ui.com">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.niomic.com">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="https://www.react.com">React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          <Grid textAlign="center">
            <Grid.Column width={12}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" textAlign="right"><Search placeholder="search document.." icon="search"/>
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Nama Document</Table.HeaderCell>
                    <Table.HeaderCell>Jenis File</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>Panduan Belajar Javascript</Label>
                    </Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Panduan Blejar CSS</Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Panduan Belajar React JS</Table.Cell>
                    <Table.Cell>PDF</Table.Cell>
                  </Table.Row>
                </Table.Body>
                
                <Table.Footer>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Footer>
              </Table>
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default App;