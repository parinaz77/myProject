import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
	button: {
  	margin: 12,
	}
};


class StorePicker extends Component{
	render() {
		return (
			<div>
				<h2>Please Enter a Store</h2>
				<TextField
			      hintText="Name"
			      floatingLabelText="Search Store Name"
			    /> <br/>
				<RaisedButton 
					label="Search" 
					primary={true}
					style={styles.button}
					/>

			</div>
		)
	}
}

export default StorePicker;
