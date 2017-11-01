console.log('App.js is running');

const appRoot = document.getElementById('app');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: []
}

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;
  
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

// JSX - Javascript XML
const renderApp = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
      {
        app.options.map((option,index) =>  <li key={index}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template,appRoot);
};

renderApp();
