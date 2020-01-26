import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }
  componentDidMount() {
    const endPoint = `you own api`;
    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        this.setState({
          article: data.articles
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.article.map((item, index) => {
          return (
            <div key={index}>
              <h2 style={{ textAlign: "left" }}>{item.title}</h2>
              <b>{item.Author}</b>
              <img src={item.urlToImage} alt="" style={{ width: "50vw" }} />
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
