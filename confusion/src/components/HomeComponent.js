import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}){

  if (isLoading) {
      return(
              <Loading />
      );
  }
  else if (errMess) {
      return(
              <h4>{errMess}</h4>
      );
  }
  else
  return(
    <FadeTransform in
               transformProps={{
                   exitTransform: 'scale(0.5) translateY(-50%)'
               }}>
               <Card>
      <div className="ui container">
     <div className="ui grid">
       <div className="ui row">
         <div className="five wide column">
     <img src = "assets/images/expert.jpg" alt = "Learn from experts" />
     </div>
     <div className="eleven wide column">

    <CardTitle> <h2>Content from Expert</h2> </CardTitle>
    <CardBody> <p>Learn From social media content experts, about different subjects and different approaches</p> </CardBody>
     </div>
   </div>
   </div>
   </div>
   </Card>
<br />
<Card>
   <div className="ui container">
<div className="ui grid">
<div className="ui row">

<div className="eleven wide column">
    <CardTitle> <h2>No Distraction Search</h2> </CardTitle>
  <CardBody> Helping Learners to get distraction free environment from social media, and getting them top quality content from content creators with their permissions. </CardBody>
</div>
<div className="five wide column">
<img src = "assets/images/learning.jpg" alt = "Learning" />
</div>
</div>
</div>
</div>
</Card>
<br/>
<Card>
<div className="ui container">
<div className="ui grid">
<div className="ui row">
<div className="five wide column">
<img src = "assets/images/echoar.png" alt = "EchoAR support" />
</div>
<div className="eleven wide column">
<CardTitle><h2>EchoAR Support Learning</h2></CardTitle>
<CardBody><p>With due support from EchoAR, a better learning environment from web support can be created.</p></CardBody>
</div>
</div>
</div>
</div>
</Card>


  </FadeTransform>
  );
}

function Home(){
  return(
    <div className="container">
      <RenderCard />
    </div>
  );
}
export default Home;
