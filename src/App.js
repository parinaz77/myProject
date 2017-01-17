import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StorePicker from './components/storePicker'
import Header from './components/header'
import BookList from './containers/book_list'
import BookDetail from './containers/book_detail'
import Inventory from './components/inventory'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto'
});

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider muiTheme={muiTheme}>
	      <div>
	      	<Header />
	        <StorePicker />
	        <BookList />
	        <BookDetail />
	        <Inventory />
	      </div>
	     </MuiThemeProvider>
    );
  }
}

export default App;
