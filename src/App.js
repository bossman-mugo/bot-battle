import React, { Component } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import BotSpecs from './components/BotSpecs';
import './App.css';

class App extends Component {
  state = {
    bots: [],
    army: [],
    selectedBot: null,
    sortOption: "health",
    filters: []
  }

  componentDidMount() {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(bots => this.setState({bots}))
  }

  handleEnlistBot = (bot) => {
    if (!this.state.army.includes(bot)) {
      const updatedArmy = [...this.state.army, bot];
      this.setState({
        army: updatedArmy
      })
    }
  }

  handleReleaseBot = (bot) => {
    const updatedArmy = this.state.army.filter(b => b !== bot);
    this.setState({army: updatedArmy});
  }

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

  handleSelectBot = (bot) => {
    this.setState({selectedBot: bot});
  }

  handleBackToCollection = () => {
    this.setState({selectedBot: null});
  }

  handleSortOptionChange = (option) => {
    this.setState({sortOption: option})
  }

  handleFilterClass = (bot_class) => {
    if (!this.state.filters.includes(bot_class)) {
      const updatedFilters = [...this.state.filters, bot_class];
      this.setState({filters: updatedFilters})
    }
  }

  handleRemoveFilter = (bot_class) => {
    const updatedFilters = this.state.filters.filter(f => f !== bot_class);
    this.setState({filters: updatedFilters});
  }

  getFilteredBots = () => {
    return this.state.bots.filter(bot => {
      return this.state.filters.length === 0 || this.state.filters.includes(bot.bot_class)
    })
  }

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
