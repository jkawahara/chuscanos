// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col, Carousel, Form } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/storage";
import FileUploader from "react-firebase-file-uploader";

class Gallery extends Component {
  state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
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
          <Col sm={{ span: 8, offset: 2 }}>
            <Carousel id="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./chus.jpg")}
                  alt="Chus"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./toscanos.jpg")}
                  alt="Toscanos"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./globe.png")}
                  alt="Globe"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./snowboarding.jpg")}
                  alt="Snowboarding"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./dopeymedals.jpg")}
                  alt="DopeyMedals"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("./christinewayback.jpg")}
                  alt="ChristineWayBack"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Gallery;
