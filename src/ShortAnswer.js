import React from 'react';
import { Button } from 'semantic-ui-react'
import { Container, Divider } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'


class ShortAnswer extends React.Component {

render() {
  return (
          <Container className='ShortAnswer' textAlign='justified'>
              <h2 className="AnswerH2">Answer</h2>
              <Divider className="Divider"/>
              <p>{this.props.answer.answer}</p>
              <h4>Did You Know...</h4>
              <p>{this.props.answer.didyouknow}</p>
              <Button inverted color='green' onClick={() => this.props.handleReadPost(this.props.answer.id)} fluid>read</Button><br></br><br></br>
              <Button onClick={() => this.props.history.push(`/`)}>Home</Button>
          </Container>  
        );
    }
}

export default withRouter(ShortAnswer);