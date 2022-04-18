import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blogs ">
      <>
        <Card className="blog-container " border="primary">
          <Card.Body>
            <Card.Title>
              Difference between authentication vs authorization
            </Card.Title>
            <hr />
            <Card.Text>
              Authentication
              <br />
              1.In authentication process,the identity of users are checked for
              providing the access to the system.
              <br />
              2.in authentication process, users or persons are verified
              <br />
              3.Authentication determines whether the person is user or not.
              <br />
              <hr />
              Authorization
              <br />
              1.While in authorization process, persons or users authorities are
              checked for accessing the resources.
              <br />
              2.While in this process, users or persons are validated.
              <br />
              3.While this process is done after the authentication process.
              <br />
              4.While it needs users privilege or security levels.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="blog-container" border="secondary">
          <Card.Body>
            <Card.Title>
              why are you using firebase? what other options do you have to
              implement authentication?
            </Card.Title>
            <hr />
            <Card.Text>
              Firebase is a less technical and time-saving alternative to
              writing full-fledged backend code for dynamic apps. You might also
              want to consider leveraging this tool if you eventually wish to
              host and manage your app in the cloud. Being serverless, Firebase
              removes the need to worry about the technicalities of cloud server
              configuration.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="blog-container" border="success">
          <Card.Body>
            <Card.Title>
              What other services does firebase provide other than
              authentication
            </Card.Title>
            <hr />
            <Card.Text>
              There are many services which Firebase provides, Most useful of
              them are:
              <hr />
              1.Cloud Firestore
              <br />
              2.Cloud Functions
              <br />
              3.Authentication
              <br />
              4.Hosting
              <br />
              5.Cloud Storage
              <br />
              6.Google Analytics
              <br />
              7.Predictions
              <br />
              8.Cloud Messaging
              <br />
              9.Dynamic Links
              <br />
              10.Remote Config
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    </div>
  );
};

export default Blog;
