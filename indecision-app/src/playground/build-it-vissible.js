const app = {
    title: 'Visibility Toggle',
    subtitle: 'Hey. These are some details you can now see!',
    visible: true,
    button: 'Hide Details'
}

const appRoot = document.getElementById('app');

const onHide = () => {
    if(app.visible) {
        app.visible = false;
        app.button = 'Show Details';
    } else {
        app.visible = true;
        app.button = 'Hide Details';
    }
    render();
}


const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onHide}>{app.button}</button>
      {app.visible && <p>{app.subtitle}</p>}
    </div>
  );

ReactDOM.render(template,appRoot);
};
  
  render();