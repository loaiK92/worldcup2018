import React from "react";
const jsonData = require("../data.json");

class Team extends React.Component {
  constructor() {
    super();
    this.state = { currentTeam: {} };
  }

  componentDidMount() {
    let team = jsonData.filter(item => {
      return item.fifa_code == this.props.match.params.teamId;
    });
    this.setState({ currentTeam: team[0] });
  }

  render() {
    return (
      <div className="team-page">
        <div className="flag-bg">
          <div className="container">
            <div className="team-logo">
              <div className="name">
                <h1>{this.state.currentTeam.country}</h1>
                <span className="underline" />
              </div>
            </div>
            <div className="team-body">
              <img src={this.state.currentTeam.flag} alt="" />
              <ul>
                <li>
                  Team:{" "}
                  <strong>
                    {this.state.currentTeam.country} -{" "}
                    {this.state.currentTeam.fifa_code}
                  </strong>
                </li>
                <li>
                  Group: <strong>{this.state.currentTeam.group_letter}</strong>
                </li>
                <li>
                  Games played:{" "}
                  <strong>{this.state.currentTeam.games_played}</strong>
                </li>
                <li>
                  Wins: <strong>{this.state.currentTeam.wins}</strong>
                </li>
                <li>
                  Draws: <strong>{this.state.currentTeam.draws}</strong>
                </li>
                <li>
                  Losses: <strong>{this.state.currentTeam.losses}</strong>
                </li>
                <li>
                  points: <strong>{this.state.currentTeam.points}</strong>
                </li>
                <li>
                  Goals_for: <strong>{this.state.currentTeam.goals_for}</strong>
                </li>
                <li>
                  Goals_against:{" "}
                  <strong>{this.state.currentTeam.goals_against}</strong>
                </li>
                <li>
                  Goal_differential:{" "}
                  <strong>{this.state.currentTeam.goal_differential}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
