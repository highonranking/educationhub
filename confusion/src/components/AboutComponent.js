import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { Fade, Stagger } from "react-animation-components";

function About(props) {
  function RenderLeader({ leader }) {
    return (
      <Media className="mt-5">
        <Media left className="mr-5">
          <Media object src={baseUrl + leader.image} alt={leader.name} />
        </Media>
        <Media body>
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          {leader.description}
        </Media>
      </Media>
    );
  }

  function RenderContent({ leaders, isLoading, errMess }) {
    if (isLoading) {
      return <Loading />;
    } else if (errMess) {
      return <h4>{errMess}</h4>;
    } else
      return (
        <Stagger in>
          {props.leaders.map(leader => (
            <Fade in key={leader.id}>
              <RenderLeader key={leader.id} leader={leader} />
            </Fade>
          ))}
        </Stagger>
      );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Why Us?</h2>
          <p>
            Social Media is the most used tool by youth and it's usage is keep on increasing. Many great content creaters are using social media to give
            educational content to its audience, but due to other nuances on social media, the students are not able to pay atttention to a specific content.
          </p>
          <p>
            We are just helping them to focus on the topic of their interest without any distractions.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Social Media Statistics by youth
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Facebook/Instagram</dt>
                <dd className="col-6">40%</dd>
                <dt className="col-6">Twitter</dt>
                <dd className="col-6">20%</dd>
                <dt className="col-6">LinkedIN</dt>
                <dd className="col-6">30%</dd>
                <dt className="col-6">Others</dt>
                <dd className="col-6">10%</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                Social Media is the greatest tool one can use in 21th century.
                </p>
                <footer className="blockquote-footer">
                  Anonymous

                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Hackathon Sponsers</h2>
        </div>
        <div className="col-12">
          <Media list>
            <RenderContent
              leaders={props.leader}
              isLoading={props.leaderLoading}
              errMess={props.leaderErrMess}
            />
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
