import React, { Component} from 'react';
import { 
  Segment, 
  Card, 
  Icon, 
  Image, 
  Dimmer, 
  Loader 
} from 'semantic-ui-react';
const api = 'https://wt-89cfc50bad1f3bc752f0a463b2877bb0-0.run.webtask.io/sheets';
export default class Home extends Component {

  async componentDidMount(){
    const sheet = await fetch(api+'?user=test').then(r=>r.json());
    this.setState({sheet})
  }

  buildCard(info, index){
    return(
      <Card key={'card-'+index}>
        <Card.Content>
          <Card.Header>
            {info.firstname} {info.lastname}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {info.timestamp}
            </span>
          </Card.Meta>
          <Card.Description>
            {info.birthdate}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name={info.gender.toLowerCase()} />
        </Card.Content>
      </Card>
    )
  }

  render(){
    console.log('HOME', this.state);
    console.log('Home', this.props);
    let sheet;
    if(this.state){
      sheet = this.state.sheet;
    }
    return (
      <Segment>
        {sheet ? 
          sheet.map(this.buildCard)
        : <Loader inverted content='Loading'/>}
      </Segment>
    )
  }
}