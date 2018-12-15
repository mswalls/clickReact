//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Cards";
import hero from "./heroes.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    hero,
    clickedHero: [],
    score: 0
  };

  imageClick = event => {
    const currentHero = event.target.alt;
    const HeroAlreadyClicked =
      this.state.clickedHero.indexOf(currentHero) > -1;

    if (HeroAlreadyClicked) {
      this.setState({
        hero: this.state.hero.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedHero: [],
        score: 0
      });
        alert("You lose.");

    } else {
      this.setState(
        {
          hero: this.state.hero.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedHero: this.state.clickedHero.concat(
            currentHero
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              hero: this.state.hero.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedHero: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.hero.map(hero => (
            <Card
              imageClick={this.imageClick}
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;