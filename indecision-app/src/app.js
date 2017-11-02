class IndecisionApp extends React.Component {
  render() {
    const title="Indecision";
    const subtitle="Put yout life in the hands of a computer";
    const options=['Thing one', 'Thing two', 'Thing four'];
    
    
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}
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
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    console.log(this.props.options);
    alert('Remove All');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button> 
        {
          this.props.options.map((option,index) => <Option key={index} optionText={option}/>)
        }
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    
    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));