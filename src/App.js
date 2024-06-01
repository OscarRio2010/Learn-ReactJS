import "./App.css";
import React from "react";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
// import Toggle from "./components/state/Toggle";
// import Game from "./components/tictactoe/Game";
// import YoutubeList from "./components/youtube/YoutubeList";

function App(props) {
  console.log(props);
  // const name = "Oscar Rio";
  return (
    // Bai Tap Youtube
    // <YoutubeList>
    //   {name}
    //   {/* children props: co the html, component, text, variable */}
    // </YoutubeList>
    // Bai Tap Button Toggle
    // <Toggle></Toggle>
    // Bai Tap Game TicTacToe
    // <Game></Game>
    // Bai Tap Nut Button SCSS
    // <div>
    //   <Button>Primary</Button>
    //   <Button className="button--secondary">Secondary</Button>
    // </div>
    // Bai Tap But Button Module Css
    // <div>
    //   <Button>Primary</Button>
    //   <Button secondary>Secondary</Button>
    // </div>
    //Bai Tap Card
    // <CardList>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    // </CardList>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  );
}

export default App;
