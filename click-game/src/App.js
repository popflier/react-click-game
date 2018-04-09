import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import bono from "./bono.json";
import "./App.css";


class App extends Component {
  state = {
    bono,
    clickedbono: [],
    score: 0
  };


  imageClick = event => {
    const currentbono = event.target.alt;
    const bonoAlreadyClicked =
      this.state.clickedbono.indexOf(currentbono) > -1;


    if (bonoAlreadyClicked) {
      this.setState({
        bono: this.state.bono.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedbono: [],
        score: 0
      });
        alert("You lose. Play again?");


    } else {
      this.setState(
        {
          bono: this.state.bono.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedbono: this.state.clickedbono.concat(
            currentbono
          ),
          score: this.state.score + 1
        },
       
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              bono: this.state.bono.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedbono: [],
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
          {this.state.bono.map(bono => (
            <FriendCard
              imageClick={this.imageClick}
              id={bono.id}
              key={bono.id}
              image={bono.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;