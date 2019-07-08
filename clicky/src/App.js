import React, { Component } from "react";
import FaceCard from "./components/FaceCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friskyDingo.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  

  // Map over this.state.friends and render a FaceCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>Click Game</NavBar>
        <Title>Click Game</Title>
        {this.state.friends.map(friend => (
          <FaceCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
