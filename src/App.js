import { Component } from "react";
import { DropDownSelector } from "./component/Dropdown";
import { Image } from "./component/Image";
import axios from "axios";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "",
      imgAlt: "",
      selectedBreed: "Random",
    };
  }

  async fetchDogImage(breed) {
    let url = "";
    if (breed.toLowerCase() === "random") {
      url = `https://dog.ceo/api/breeds/image/random`;
    } else {
      url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;
    }
    try {
      let response = await axios.get(url);
      if (response.status !== 200 || response.data.status !== "success") {
        alert("Failed to fetch data");
      } else {
        this.setState({
          imgSrc: response.data.message,
          imgAlt: `Image of ${breed}`,
          selectedBreed: breed,
        });
      }
    } catch (err) {
      console.log(err.message);
      alert("Failed to fetch data");
    }
  }
  componentDidMount() {
    this.fetchDogImage("Random");
  }
  handleBreedChange = (event) => {
    const breed = event.target.value;
    this.fetchDogImage(breed);
  };

  render() {
    return (
      <div className="App" onLoad={this.getRandomData}>
        <DropDownSelector
          title={"breed"}
          listOfItems={["Random", "Beagle", "Boxer", "Dalmatian", "Husky"]}
          onChange={this.handleBreedChange}
        />
        <Image src={this.state.imgSrc} alt={this.state.imgAlt} />
        <button
          className="btn"
          onClick={() => this.fetchDogImage(this.state.selectedBreed)}
          type="button"
        >
          Next
        </button>
      </div>
    );
  }
}
