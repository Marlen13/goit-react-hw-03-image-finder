import React, { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import * as Service from "./Service/service";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Modal } from "./Modal/Modal";


export class App extends Component {
  state = {
    inputValue: "",
    images: [],
    page: 1,
    showModal: true
  }

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  }
  async componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state
    if (prevState.inputValue !== inputValue && inputValue !== '') {
      try {

        const { data: { hits } } = await Service.getImages({ inputValue, page });
        this.setState({ images: hits})
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
        {this.state.images.length !== 0 && <ImageGallery onClick={this.toggleModal} />}
        {this.state.images.map((image) => {
          return < ImageGalleryItem />}
        ) 
        }
        {/* {this.state.images.length !== 0 && (
          <Grid>
            {this.state.images.map(({ id, avg_color, large, alt }) => {
              return (
                <GridItem key={id}>
                  <CardItem color={avg_color}>
                    <img
                      src={large}
                      alt={alt}
                      onClick={this.handleImageClick}
                    />
                  </CardItem>
                </GridItem>
              );
            })}
          </Grid>
        )} */}
 
        {showModal && <Modal
          />}
    </>
  );
        }; 
};
