import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: 'Monsters Rolodex'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  };

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className='App'>
      <h1>{title}</h1>
      <SearchBox
        onChange={e => this.setState({ searchField: e.target.value, title: e.target.value })}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
