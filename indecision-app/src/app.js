// // SECTION 4 - REACT COMPONENTS (STATEFUL CLASS BASED)

// SECTION 5 - stateless functional components

// stateful class component

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  //lifecycle methods (https://reactjs.org/docs/react-component.html)
  // componentDidMount() - called one time when component is mount to ReactDOM
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState((prevState) => ({ options }));
      }
      console.log('fetching data');
    } catch(e) {
      // Do nothing at all
    }
    
  }
  // componentDidUpdate(prevProps, prevState) - called every time component re-renders/state changes/props change
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options', json);
         console.log('saving data');
    }
    // has access to this.props and this.state
    // gets as params the previous Props and State
  }
  // componentWillUnmount() - called one time when component is unmount from ReactDOM
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    // ES6 ArrowFunction OneLiner
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
      }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat([option])
    //   }
    // });
    this.setState((prevState) => ({ 
      options: prevState.options.concat([option]) 
    }));
  }
  render() {
    const subtitle="Put yout life in the hands of a computer";
    
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

// class based component

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// stateless functional component

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// section 4 - class component

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// section 5 - stateless functional componment

const Action = (props) => {
  return (
      <div>
        <button
          disabled={!props.hasOptions}
          onClick={props.handlePick}>
          What should I do?
        </button>
      </div>   
  );
} 

//section 3

/*
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Number of Options: {this.props.options.length}</p>
        {
          this.props.options.map((option,index) => <p key={index}>{option}</p>)
        }
        <Option />
      </div>
    );
  }
}
*/

// section 4 - class based component

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button> 
//         {
//           this.props.options.map((option,index) => <Option key={index} optionText={option}/>)
//         }
//         <Option />
//       </div>
//     );
//   }
// }

// section 5 - stateless functional componet

const Options = (props) => {
  return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button> 
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option,index) => (
            <Option 
              key={index} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
            ))
        }
      </div>
    );
};

// section 4 - class based component (no state)

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

// section 5 - statless functional componet

const Option = (props) => {
  return (
      <div>
        {props.optionText}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}
        >
          Remove
        </button>
      </div>
    );
}; 

//statefull class component

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    
    const error = this.props.handleAddOption(option);
    // this.setState(() => {
    //   return { error };
    // });
    this.setState(() => ({ error }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// stateless functional component
// faster
// easier to read
// easier to test
// best candidates are components with just a render method

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>

//   );
// }

// ReactDOM.render(<User name="Andrew" age="26"/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp options={['Eindhoven','Barcelona']}/>, document.getElementById('app'));