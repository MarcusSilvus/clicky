import React, { Component } from "react";
import FaceCard from "./components/FaceCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friskyDingo.json";

class App extends Component {
  state = {
    friends
  };

 shuffleFriends = (friends) => {
  const _friends = friends.slice(0)
  for (let i = 0; i < friends.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _friends[i]
    _friends[i] = _friends[randomIndex]
    _friends[randomIndex] = temp
  }
  return _friends;
}


// Map over this.state.friends and render a FaceCard component for each friend object
render() {
  const shuffledFriends = this.shuffleFriends(this.state.friends);
  return (
    <Wrapper>
      <NavBar>Click Game</NavBar>
      <Title>Click Game</Title>
      {shuffledFriends.map(friend => (
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
