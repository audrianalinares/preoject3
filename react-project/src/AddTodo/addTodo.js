import Teact from 'react';

class AddTodo extends React.Component {

    render() {
        return(<div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input onChange={(e) => this.updateInput(e)} type='text'></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
        );
    }
    updateInput = (e) => {
        console.log(e);
    }
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
    }

}
export default AddTodo;