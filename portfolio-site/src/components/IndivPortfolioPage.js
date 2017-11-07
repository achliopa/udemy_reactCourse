import React from 'react';

const IndivPortfolioPage = (props) => (
    
    <div>
        <h1>A Project I've done</h1>
        <p>This page is for the project with id of {props.match.params.id}</p>
    </div>
);

export default IndivPortfolioPage;