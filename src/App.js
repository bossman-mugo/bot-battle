import React, { Component } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import BotSpecs from './components/BotSpecs';
import './App.css';

class App extends Component {

  // initializing state with default values
  state = {
    bots: [],
    army: [],
    selectedBot: null,
    sortOption: "health",
    filters: []
  }

  //fetches the bots data from the API
  componentDidMount() {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(bots => this.setState({bots}))
  }

  // adds a bot to array
  handleEnlistBot = (bot) => {
    if (!this.state.army.includes(bot)) {
      const updatedArmy = [...this.state.army, bot];
      this.setState({
        army: updatedArmy
      })
    }
  }

//removes a bot from the array by filtering
  handleReleaseBot = (bot) => {
    const updatedArmy = this.state.army.filter(b => b !== bot);
    this.setState({army: updatedArmy});
  }

  //deletes a bot from the server hence the delete method
  handleDeleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        const updatedBots = this.state.bots.filter(b => b !== bot);
        this.setState({
          bots: updatedBots,
          army: this.state.army.filter(b => b !== bot),
          selectedBot: null
        })
      });
  }

  //sets the selectedBot state to the given bot
  handleSelectBot = (bot) => {
    this.setState({selectedBot: bot});
  }

  // goes back to the Botcollection view
  handleBackToCollection = () => {
    this.setState({selectedBot: null});
  }

  //updates sortOption state with new value
  handleSortOptionChange = (option) => {
    this.setState({sortOption: option})
  }

  //adds filter to the filters array
  handleFilterClass = (bot_class) => {
    if (!this.state.filters.includes(bot_class)) {
      const updatedFilters = [...this.state.filters, bot_class];
      this.setState({filters: updatedFilters})
    }
  }

  //removes filter from the filters array
  handleRemoveFilter = (bot_class) => {
    const updatedFilters = this.state.filters.filter(f => f !== bot_class);
    this.setState({filters: updatedFilters});
  }

  // Filters the bots array based on filters state array

  getFilteredBots = () => {
    return this.state.bots.filter(bot => {
      return this.state.filters.length === 0 || this.state.filters.includes(bot.bot_class)
    })
  
  }

//Sorts filtered bot array based on sortOption state value
  getSortedBots = () => {
    const sortOption = this.state.sortOption;
    const sortedBots = [...this.getFilteredBots()].sort((a, b) => {
      return b[sortOption] - a[sortOption]
    });
    return sortedBots;
  }

  
  render() {
    const {bots, army, selectedBot, sortOption, filters} = this.state;
    let displayComponent;

    if (selectedBot) {
      displayComponent = <BotSpecs bot={selectedBot} onBackToCollection={this.handleBackToCollection} onEnlistBot={this.handleEnlistBot}/>
    } else {
      displayComponent = (
        <>
          <SortBar sortOption={sortOption} onSortOptionChange={this.handleSortOptionChange}/>
          <FilterBar filters={filters} onFilterClass={this.handleFilterClass} onRemoveFilter={this.handleRemoveFilter}/>
          <div className="container">
            <BotCollection bots={this.getSortedBots()} onEnlistBot={this.handleEnlistBot} onSelectBot={this.handleSelectBot}/>
            <YourBotArmy bots={army} onReleaseBot={this.handleReleaseBot} onDeleteBot={this.handleDeleteBot} onSelectBot={this.handleSelectBot}/>
          </div>
        </>
      )
    }

    return (
      <div className="App">
        <h1>Bot Battlr</h1>
        {displayComponent}
      </div>
    );
  }
}

export default App;
