import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
//lifecycle method componet will Mount
componentWillMount() {
  this.props.employeesFetch();

  this.createDataSource(this.props);
}
//Another lifecycle method that will be called whenever we are about
//to receive a new set of props to return the componet
componentWillReceiveProps(nextProps) {
  // nextProps are the next set of props that this componet
  // will be rendered with
  // this.props is still the old set of props

  this.createDataSource(nextProps);
}

//Another helper method creating called createDataSource and expect
//this to be called with a prop's object.
//(so here we expect that props object to have a property of employees)
createDataSource({ employees }){
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(employees);
}

renderRow(employee) {
  return <ListItem employee={employee} />;
}

render() {
    return (
        <ListView
           enableEmptySections
           dataSource={this.dataSource}
           renderRow={this.renderRow}
        />
    );
  }
}

// lodash has a whole bunch of helper methods for working with objects
// and arrays. Helps with this conversion going from an object to an array.
const mapStateToProps = state => {
   const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid }; //end result {shift:'Monday, name:'S', id:'1234'};
     });
     return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
