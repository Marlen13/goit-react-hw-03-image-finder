import React, { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import * as Service from "./Service/service";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Modal } from "./Modal/Modal";


export class App extends Component {
  state = {
    inputValue: "",
    images: {},
    page: 1,
    showModal: true
  }

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  }
  async componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state
    if (prevState.inputValue !== inputValue || inputValue !== '') {
      try {

        const result = await Service.getImages({ inputValue, page });
        this.setState({ images: result})
      } catch (error) {

      }
    }
  }
  
  toggleModal = () => {
    this.setState(({showModal})=> ({
      showModal: !showModal
    }))
  }
  render() {
    const { showModal } = this.state
      
    return (
    <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery onClick={this.toggleModal} />
        <ImageGalleryItem />
        {showModal && <Modal
          />}
    </>
  );
  }
  
};
