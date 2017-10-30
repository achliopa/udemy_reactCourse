console.log('App.js is running');


const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: ['One', 'Two']
}

// JSX - Javascript XML
const template = (
<div>
  {app.title && <h1>{app.title}</h1>}
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? `Here are your options: ${app.options}` : `No options`}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

function getLocation(location) {
	if(location) {
		return <p>Location: {location}</p>;
	}
}

const user = {
  name: '                   Andrew          ',
  age: 26,
  location: 'Philadelphia'
};
const templateTwo = (
  <div>
    <h1>{user.name? user.name.trim() : 'Anonymous'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

//RENDER
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo,appRoot);