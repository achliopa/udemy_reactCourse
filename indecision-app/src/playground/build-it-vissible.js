// // Section 3

// const app = {
//     title: 'Visibility Toggle',
//     subtitle: 'Hey. These are some details you can now see!',
//     visible: true,
//     button: 'Hide Details'
// }

// const appRoot = document.getElementById('app');

// const onHide = () => {
//     if(app.visible) {
//         app.visible = false;
//         app.button = 'Show Details';
//     } else {
//         app.visible = true;
//         app.button = 'Hide Details';
//     }
//     render();
// }


// const render = () => {
//   var template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onHide}>{app.button}</button>
//       {app.visible && <p>{app.subtitle}</p>}
//     </div>
//   );

// ReactDOM.render(template,appRoot);
// };
  
//   render();

// // Section 4

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility  && <p>Hey. These are some details you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));