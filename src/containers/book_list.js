import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
	renderList(){
		return this.props.books.map((book)=>{
			return(
					<li key={book.title}>{book.title}</li>
				);
		});
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state){
	//whatever is returned will show up as props inside of bookList
	return{
		books: state.books
	};
}

//anything returned from this function will end up as props on the bookList container
function mapDispatchToProps(dispatch){
	//whenever selecBook is called. the result should be passed to all of our reducers
	return bindActionCreators({selectBook: selectBook},dispatch)
};

//promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
