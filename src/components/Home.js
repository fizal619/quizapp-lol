import React, { Component} from 'react';
import { 
  Segment, 
  Card, 
  Icon, 
  Image, 
  Dimmer, 
  Container,
  Grid,
  Label,
  Loader 
} from 'semantic-ui-react';
const api = 'https://wt-89cfc50bad1f3bc752f0a463b2877bb0-0.run.webtask.io/sheets';
export default class Home extends Component {

  async componentDidMount(){
    const sheet = await fetch(api+'?user=test').then(r=>r.json());
    this.setState({sheet})
  }

  buildCard(info, index){
    const term = this.props.term.toLowerCase();
    if(!info.firstname.toLowerCase().includes(term) && !info.lastname.toLowerCase().includes(term)) return null;

    return(
      <Grid.Column width={4} key={'card-'+index}>
        <Card>
          <Card.Content>
            <Card.Header>
              {info.firstname} {info.lastname}
              
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Submitted: {info.timestamp}
              </span>
            </Card.Meta>
            <Card.Description>
              {info.birthdate}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Label color='blue'>
              <Icon name={info.gender.toLowerCase()}  />
              {info.gender}
            </Label>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render(){
    console.log('HOME STATE', this.state);
    console.log('Home Props', this.props);

    let sheet;
    if(this.state){
      sheet = this.state.sheet;
    }
    
    return (
      <Container >
        <Grid relaxed columns={'equal'}>
          {sheet ? 
            sheet.map(this.buildCard.bind(this))
          : <Loader active content='Loading'/>}
        </Grid>
      </Container>
    )
  }
}