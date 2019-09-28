import React from 'react';
import Item from './componnets/Item';
import './App.css'

const data = [];

for (var i = 0; i < 100; i++) {
  data.push({
    name: `valera${i}`,
    age: i,
  });
}

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    }
  }

  componentWillMount() {
    console.log('ya nachal');
  }

  componentDidMount() {
    console.log('test')
  }

  onItemClick = (name) => {
    this.setState({ selectedItem: name });
  }

  render() {
    console.log('[App][render]');
    return (
        <div onClick={this.test} className="App">
          <div className="list">
            {data.map((item, index) => {
              return(
                <Item
                    key={index}
                    selectedItem={this.state.selectedItem}
                    name={item.name}
                    age={item.age}
                    onItemClick={() => this.onItemClick(item.name)}
                />
              )
            })}
          </div>
        </div>
    );
  }
}

export default App;
