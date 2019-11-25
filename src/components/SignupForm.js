import React from 'react';
import { Link } from 'react-router-dom';

import { SignupQuestion } from './SignupQuestion'

export class SignupForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionNumber: 1,
      name: '',
      age: 49,
      height: {
        feet: 0,
        inches: 0
      }
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  nextQuestion () {
    let i = this.state.questionNumber;
    this.setState({questionNumber: i + 1})
  }

  previousQuestion () {
    let i = this.state.questionNumber;
    if (i !== 1) {
      this.setState({questionNumber: i -1})
    }
  }

  async selectAnswer (answer, prop) {
    // event.preventDefault();

    try {
      if (prop !== 'age') {
        this.setState ({
          height: {
            prop: answer
          }
         })
      } else {
        this.setState({ prop: answer })
      }
    } catch (err) {
      console.error (err)
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='login-container'>
          {/* <input type='submit'
                name='submit'
                onClick={() => this.nextQuestion()}
          /> */}
          <SignupQuestion questionNumber={this.state.questionNumber} selectAnswer={this.selectAnswer} />
          <div className='nav-buttons'>
            <div onClick={() => this.previousQuestion()} className='single-btn'>Back</div>
            <div onClick={() => this.nextQuestion()} className='single-btn'>Next</div>
            {/* <i className='left'></i>
            <i className='right'></i> */}
          </div>
      </div>
    </div>
    )
  }
}
