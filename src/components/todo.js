import React from "react";
import { connect } from "react-redux";
import { addTodo, clearTodo, removeTodo } from "../actions/action";
import Header from "./header";
import Form from "./form";
import ItemList from "./itemList";

class todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleText = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { onAddTodo, onClearTodo, todos, removeSingleTodo } = this.props;
    return (
      <div>
        <Header />
        <div className="content-wrapper container">
          <Form
            text={this.state.text}
            onTextChange={this.handleText}
            addTodo={onAddTodo}
            removeTodos={onClearTodo}
            todoList={todos}
          />
          <ItemList todoList={todos} removeTodo={removeSingleTodo} />
        </div>
      </div>
    );
  }
}

//this handles getting the state from the store
const mapStateToProps = state => ({
  todos: state
});

//this handles the actions from the actions folder
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => dispatch(addTodo(text)),
    onClearTodo: () => dispatch(clearTodo),
    removeSingleTodo: id => dispatch(removeTodo(id))
  };
};

//this connects to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todo);
