import React from 'react';
import flower from '../vase-flower.png';
import swan from '../swan.png';

export class SignupQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      age: 49,
      feet: 0,
      inches: 0,
    }
  }

  render () {
    switch (this.props.questionNumber) {
      case 1:
        return (
          <div className='signup-container'>
            What is your name?
            <img src={swan} />
            <form>
              <label>
                What is your name?
                <input type='text' />
              </label>
            </form>
          </div>
        )
        case 2:
          let agesUnder = []
          let agesOver = []
          for (let i = 18; i < 49; i++) {
            agesUnder.push(i)
          }
          for (let i = 49; i < 99; i++) {
            agesOver.push(i)
          }

          return (
            <div className='signup-container'>
                How old are you?
                <img src={flower} />
                <div className='age-menu'>
                  <div className='down'>\/
                  <div className='under-49'>
                    {agesUnder.map((age, idx) => {
                      return (
                        <div className='age' key={idx} onClick={() => this.setState({age: age})}>{age}</div>
                      )})
                      }
                  </div>
                  </div>
                  {this.state.age}
                  <div className='up'>
                  <div className='over-49'>
                    {agesOver.map((age, idx) => {
                      return (
                        <div className='age' key={idx} onClick={() => this.setState({age: age})}>{age}</div>
                      )
                    })}
                  </div>
                  /\</div>
              </div>
            </div>
          )
        case 3:
          let feet = []
          let inches = [];
          for (let i = 3; i < 8; i++) { feet.push(i) }
          for (let i = 0; i < 12; i++) { inches.push(i) }

          return (
            <div className='signup-container'>
              <div className='age-menu'>
              I am
              <div className='down'>
              {this.state.feet} '
              <div className='under-49'>
                  {feet.map((foot, idx) => {
                    return (
                      <div className='age'
                            key={idx}
                            onClick={() => this.setState({feet: foot})}
                      >
                      {foot}
                      </div>
                    )
                  })}
                </div>
                </div>
                <div className='up'>
                <div className='over-49'>
                  {inches.map((inch, idx) => {
                    return (
                      <div className='age' key={idx} onClick={() => this.setState({inches: inch})}>{inch}</div>
                    )
                  })}
                </div>
                {this.state.inches === 0
                ? '00 "'
                : `${this.state.inches} "`
                }</div>
              </div>
            </div>
          )
      case 4:
      case 5:
      default:
        return (
          <div>TEST</div>
        )
    }
  }
}

// export const SignupQuestion = (props) => {
//   const i = props.state.questionNumber;
//   const age = props.state.age;
//   const selectAnswer = props.selectAnswer;

//   switch (i) {
//     case 1:
//       return (
//         <div className='signup-container'>
//           What is your name?
//           <img src={swan} />
//           <form>
//             <label>
//               What is your name?
//               <input type='text' />
//             </label>
//           </form>
//         </div>
//       )
//     case 2:
//       let agesUnder = []
//       let agesOver = []
//       for (let i = 18; i < 49; i++) {
//         agesUnder.push(i)
//       }
//       for (let i = 49; i < 99; i++) {
//         agesOver.push(i)
//       }

//       return (
//         <div className='signup-container'>
//             How old are you?
//             <img src={flower} />
//             <div className='age-menu'>
//               <div className='down'>\/
//               <div className='under-49'>
//                 {agesUnder.map((age, idx) => {
//                   return (
//                     <div className='age' key={idx} onClick={(event) => selectAnswer('age')}>{age}</div>
//                   )})
//                   }
//               </div>
//               </div>
//               {age}
//               <div className='up'>
//               <div className='over-49'>
//                 {agesOver.map((age, idx) => {
//                   return (
//                     <div className='age' key={idx} onClick={(event) => selectAnswer(age, 'age')}>{age}</div>
//                   )
//                 })}
//               </div>
//               /\</div>
//           </div>
//         </div>
//       )
//     case 3:
//       let feet = []
//       let inches = [];
//       for (let i = 3; i < 8; i++) { feet.push(i) }
//       for (let i = 1; i < 12; i++) { inches.push(i) }

//       return (
//         <div className='signup-container'>
//           How tall are you?
//           {/* <hr></hr> */}
//           <div className='height-container'>
//           <div className='height'>
//               {feet.map((foot) => {
//                 return (
//                   <div className='unit'>{foot}</div>
//                 )
//               })}
//             </div>
//             feet
//             <div className='height'>
//               {inches.map((inch) => {
//                 return (
//                   <div className='unit'>{inch}</div>
//                 )
//               })}
//             </div>
//             inches

//           </div>
//         </div>
//       )
//     case 4:
//     case 5:
//     default:
//       return (
//         <div> </div>
//       )
//   }
// }

// change background color of height div
{/* <div className='signup-container'>
              I am
              <div className='height-container'>
              <div className='height'>
                  {feet.map((foot, idx) => {
                    return (
                      <div className='unit'
                            key={idx}
                            onClick={this.selectHeight}
                            style={{backgroundColor: this.state.backgroundColor}}>
                      {foot}
                      </div>
                    )
                  })}
                </div>
                feet
                <div className='height'>
                  {inches.map((inch, idx) => {
                    return (
                      <div className='unit' key={idx}>{inch}</div>
                    )
                  })}
                </div>
                inches
              </div>
            </div>
          ) */}
