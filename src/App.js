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
  

  








}
