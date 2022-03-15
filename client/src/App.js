// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

import React, { useRef, useEffect } from "react";
import "./App.css"; 
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsSkype} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import {BsFillCameraVideoFill} from "react-icons/bs"


//import * as tf from "@tensorflow/tfjs";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";

// NEW MODEL
import { Link } from "react-router-dom";

function App() {
  // const webcamRef = useRef(null);
  // const canvasRef = useRef(null);

  // //  Load posenet
  // const runFacemesh = async () => {
  //   // OLD MODEL
  //   // const net = await facemesh.load({
  //   //   inputResolution: { width: 640, height: 480 },
  //   //   scale: 0.8,
  //   // });
  //   // NEW MODEL
  //   const net = await facemesh.load(
  //     facemesh.SupportedPackages.mediapipeFacemesh
  //   );
  //   setInterval(() => {
  //     detect(net);
  //   }, 10);
  // };

  // const detect = async (net) => {
  //   if (
  //     typeof webcamRef.current !== "undefined" &&
  //     webcamRef.current !== null &&
  //     webcamRef.current.video.readyState === 4
  //   ) {
  //     // Get Video Properties
  //     const video = webcamRef.current.video;
  //     const videoWidth = webcamRef.current.video.videoWidth;
  //     const videoHeight = webcamRef.current.video.videoHeight;

  //     // Set video width
  //     webcamRef.current.video.width = videoWidth;
  //     webcamRef.current.video.height = videoHeight;

  //     // Set canvas width
  //     canvasRef.current.width = videoWidth;
  //     canvasRef.current.height = videoHeight;

  //     // Make Detections
  //     // OLD MODEL
  //     //       const face = await net.estimateFaces(video);
  //     // NEW MODEL
  //     const face = await net.estimateFaces({ input: video });
  //     console.log(face);

  //     // Get canvas context
  //     const ctx = canvasRef.current.getContext("2d");
  //     requestAnimationFrame(() => {
  //       drawMesh(face, ctx);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   runFacemesh();
  // }, []);

  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        id="homepage_nav"
      >
        <div class="container-fluid">
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <img
                class="nav_img"
                src="real_img.png"
                alt=""
                width="200"
                height="40"
              />
            </div>
          </nav>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav pusher">
              <a class="nav-link active upper" aria-current="page" href="#">
                Home
              </a>
              
              <a class="nav-link upper" href="#main_area">
                Face Recognition
              </a>
              <a class="nav-link upper" href="#last_page">
                More
              </a>
            </div>
            <BsFillCameraVideoFill style={{fontSize:40,marginRight:20}}/>
          </div>
        </div>
      </nav>
      <div class="homepage_image text-center">
        <img id="main_image" class="img-fluid" src="retake2.png" alt="" />
      </div>
      <br />
      <br />

      <div class="container main_area" id="main_area">
        <div class="row">
          <div class="col" style={{fontWeight:600, fontSize:60, color:'#FFFFFF'}}>Face Recognition</div>
        
        </div>
      </div>
      <div
        class="container"
        style={{ backgroundColor: "#f2f2f2", maxHeight: "90%" }}
      >
        <div class="row">
          <div class="col-5">
            <img
              style={{ marginTop: "80px" , marginLeft: "30px"}}
              class="img-fluid"
              src="1.jpg"
              alt=""
            />
          </div>
          <div class="col-7">
            <h1 style={{ textAlign: "center", marginTop: "8%",fontSize:100 }}>
              Welcome!
            </h1>
            <p style={{marginTop:150,fontSize:45,color:'#56BBF1'}}>Facial Landmark Recognition</p>
            <img src="2.png" alt="" class="img-fluid" width="50%" />
            <img src="3.png" alt="" class="img-fluid" width="30%" />
            
            <div style={{backgroundColor:'#56BBF1', width:500,height:80,marginLeft:130,marginBottom:40}}>
            <Link style={{color:'#FFFFFF',fontSize: 40,textDecoration: 'none' }} to="/facerecognition">Click here to explore</Link>
            </div>
            
          </div>
        </div>
        <br />
        <br />
      </div>

      <br />
      <br />
      <div id="last_page">
        <h1 class="our">
          <strong>Our Clients</strong>
        </h1>
        <img src="logos.png" alt="" class="img-fluid" />
        <div class="last container-fluid">
         
          
          <h1 class="our">
            <strong>
              <strong>CONTACT US</strong>
            </strong>
          </h1>
          <div>
        <p style={{padding:30}}>
            <BsFacebook style={{fontSize:40,marginLeft:0}} />
             {" "}
            <BsLinkedin style={{fontSize:40,marginLeft:7}} />
            {" "}
            <BsSkype style={{fontSize:40,marginLeft:10}} />
            {" "}
            <SiGmail style={{fontSize:40,marginLeft:13}} />
        </p>
        
    </div>
          
        
        </div>
      </div>
      {/* <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header> */}
    </div>
  );
}

export default App;
