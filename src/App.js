import React,  from "react";

class App extends Component {
  state = {
    bots: [],
    army: [],
    selectedBot: null,
    sortOption: "health",
    filters: []
  }

  componentDidMount() {
    fetch("http:??localhost:8001/bots")
    .then(r => r.json())
    .then(bots => this.setState({bots}))
  }

  handleEnlistBot  = (bot) => {
    if (!this.state.army.includes(bot)) {
      const updatedArray = [...this.state.army, bot];
      this.setState({
        army: updatedArmy
      })
    }
  }

  handleReleaseBot = (bot) => {
    const updatedArmy = this.state.armymfilter(b => b !== bot);
    this.setState({army: updatedArmy});
  }

  handleDeleteBot = (bot) => {
    fetch (`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })

    .then (response => response.json())
    .then(() => {
      const updatedBots = this.state.bots.filter(b => b!== bot);
      this.setState({
        bots: updatedBots,
        army: this.state.army.filter(b => b!== bot),
        selectedBot: null
      })
    })
  }

  handleSelectBot = (bot) => {
    this.setState({selectedBot: bot});
  }

  hanldeBackToCollection = () => {
    this.setState({selectedBot: null})
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

  handleRemoveFilter = (bot-class) => {
    const updatedFilters = this.state.filters.filter(f => f !== bot_class);
    this.setState({filters: updatedFilters})
  }


  return ( 
    <div className ="App"
    
    ><h1>Bot Battle</h1>
    
    
    </div>
  )
  








}
