// *** Story component
import React, { Component } from "react";
import { Container, Row, Col, Carousel, Form } from "react-bootstrap";
import "./style.css";
import firebase from "firebase/app"; // Refer to /src/components/Guestbook/firebase.js for Firebase config
import "firebase/storage";
import FileUploader from "react-firebase-file-uploader";
import { imagesAnniv, imagesCouple, imagesMemories } from "./import_images";

class Gallery extends Component {
  state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: "",
    imagesAnniv: imagesAnniv,
    imagesCouple: imagesCouple,
    imagesMemories: imagesMemories
  };
 
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });
  
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <Container id="gallery">
        <Row>
          <Col id="titlegallery">Gallery</Col>
        </Row>
        <Row>
          <Col id="titlefile">Send us a pic of Christine & Salvador (10 MB max image size)</Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                </Col>
              </Row>
                <Col>
                  {this.state.avatarURL && <img src={this.state.avatarURL} id="uploadedimg" alt="upload" />}
                </Col>
              <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                  <FileUploader
                    className="forminput border border-secondary"
                    id="fileselect"
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col id="titlecarousel">Anniversaries</Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Carousel id="carousel">
              {this.state.imagesAnniv.map(image => (
                <Carousel.Item key={image}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={image}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col id="titlecarousel">The Betrothed</Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Carousel id="carousel">
              {this.state.imagesCouple.map(image => (
                <Carousel.Item key={image}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={image}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col id="titlecarousel">Memories</Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Carousel id="carousel">
              {this.state.imagesMemories.map(image => (
                <Carousel.Item key={image}>
                  <img key={image}
                    className="d-block w-100"
                    src={image}
                    alt={image}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Gallery;
