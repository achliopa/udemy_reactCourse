// SECTION 3

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// var appRoot = document.getElementById('app');


// // function for rerendering after change
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
  
//   ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();

// SECTION 4

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    //React Component State 
    this.state = {
      // using defaultProps
      //count: props.count

      // using persistence through localStorage
      count: 0
    }
  }
  componentDidMount() {
    const countString = localStorage.getItem('count');
    const count = parseInt(countString,10);
    if(!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count',this.state.count);
    }
  }

  handleAddOne(){
    //this dowsne work as it does not rerender
    //this.state.count++;
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  
  handleReset() {
   this.setState(() => {
      return {
        count: 0
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>  
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

// ReactDOM.render(<Counter count={100} />,document.getElementById('app'));
ReactDOM.render(<Counter />,document.getElementById('app'));

