import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
     	{
        	props.expenses.map((expense,index) => (
              <ExpenseListItem 
                key={index} 
                { ...expense}
              />
              ))
          }
    </div>
);

// export default  connect((state) => {
//     return {
//         expenses: state.expenses  
//     };
// })(ExpenseList);

const mapStateToProps = (state) => {
  return {
      expenses: selectExpenses(state.expenses,state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
