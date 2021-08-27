import { Component } from 'react';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ''
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div
            style={{
              padding: 30,
              textAlign: 'left',
              maxWidth: 500,
              margin: 'auto'
            }}
          >
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type Item Here"
              value={this.state.newItem}
              onChange={e => this.updateInput('newItem', e.target.value)}
            />
            <button
              className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i className="material-icons">Add</i>
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button
                      className="add-btn btn-floating"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      <i className="material-icons">x</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todolist;
