import React from "react";
const jsonData = require("../data.json");

class App extends React.Component {
  constructor() {
    super();
    this.state = { teams: [] };
  }

  componentDidMount() {
    let teams = jsonData.map(team => {
      const styles = { backgroundImage: `url('${team.flag}')` };
      return (
        <div className="country-div" key={team.fifa_code}>
          <a href={`/team/${team.fifa_code}`}>
            <div className="country" style={styles} />
            <h3>{team.country}</h3>
          </a>
        </div>
      );
    });
    this.setState({ teams: teams });
  }

  render() {
    //in case want  to make the result in 2 arrays
    // function chunkArray(arr, n) {
    //   var chunkLength = Math.max(arr.length / n, 1);
    //   var chunks = [];
    //   for (var i = 0; i < n; i++) {
    //     if (chunkLength * (i + 1) <= arr.length)
    //       chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    //   }
    //   return chunks;
    // }
    // const groups = chunkArray(this.state.teams, 2);
    return (
      <div className="index-page">
        <div className="menu">{this.state.teams}</div>
        {/* <div className="menu-2">{groups[1]}</div> */}
      </div>
    );
  }
}

export default App;
