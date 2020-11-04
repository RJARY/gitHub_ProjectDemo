import React from "react";
import './App.css';
import { Col, Row } from "react-bootstrap";
import Language from "./language";
import Types from "./type";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      profileData:{},
      repoData:[]
    }

  }
  componentDidMount(){
    fetch("https://api.github.com/users/supreetsingh247")
    .then(response => response.json())
    .then(data => this.setState({profileData:data}))

    fetch("https://api.github.com/users/supreetsingh247/repos")
    .then(response => response.json())
    .then(data => this.setState({repoData:data}))
  }

  openTab = (tabName) => {

    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";
    
    var header = document.getElementById("myDIV");
    var btn = header.getElementsByClassName("btn");
    for (var j = 0; j < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

  }

  render(){
    var profileInfo = this.state.profileData;
    var repoInfo = this.state.repoData;
    var repoCount = repoInfo.length;
  return (
    <div className="App-header">
    <Row>
    <Col md={12}>
      <ul>
        <li style={{marginLeft:"-90px"}}><a href="https://github.com/"><img src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4" alt="github Icon" height="12%" width="14%"/></a></li>
        <li style={{marginLeft:"-90px"}}><div className="position-relative"><input style= {{backgroundColor:"#24292e",color:"white"}} type="text" placeholder="Search or jump to..."/></div></li>
        <li><a href="#home">Pull Requests</a></li>
        <li><a href="#home1">Issues</a></li>
        <li><a href="#home3">Marketplace</a></li>
        <li><a href="#home2">Explore</a></li>
        <li style={{float:"right", marginRight:"-180px"}}><a href="https://github.com/"><img src="https://avatars1.githubusercontent.com/u/7427552?v=4" alt="github Icon" height="6%" width="6%" style={{marginLeft:"-100px"}} /></a></li>
        <li style={{float:"right",marginRight:"-120px"}}><a href="#home4">Add</a></li>
        <li style={{float:"right",marginRight:"-70px"}}><a href="#home4">Notifications</a></li>
        
      </ul>
      </Col>
      <Col md={12}>
        <Col md={4}>
        <div style={{marginLeft:"20%",marginTop:"10%"}}>
  
        <img src={profileInfo.avatar_url} height="90%" width="90%" alt="profile pic"/>
          <h4 style={{fontWeight:"bold"}}>{profileInfo.name}</h4>
          <h5 style={{marginTop:"-16px",color:"#586069"}}>{profileInfo.login}</h5>
          <p style={{fontSize:"20px",color:"#24292E"}}>{profileInfo.bio}</p>
          <button style={{textAlign:"Center",width:"65%",height:"40px",borderRadius:"5px",boder:"1px solid #586069" ,fontSize:"15px"}}>Follow</button>
          <button style={{textAlign:"Center",width:"30%",height:"40px",borderRadius:"5px",boder:"1px solid #586069" ,fontSize:"15px",marginLeft:"5px"}}>...</button>
          <div style={{padding:"10px 0px 10px"}}> 
          <span style={{color:"black",fontSize:"15px",fontWeight:"bold"}}>{profileInfo.followers}</span>
          <span style={{marginLeft:"3px",fontSize:"15px",color:"#586069"}}><a style={{color:"#586069"}} href={profileInfo.followers_url}>followers</a> .</span>
          <span style={{color:"black",fontSize:"15px",fontWeight:"bold", marginLeft:"3px"}}>{profileInfo.following}</span>
          <span style={{marginLeft:"3px",fontSize:"15px",color:"#586069"}}><a style={{color:"#586069"}} href={profileInfo.following_url  }>following</a> .</span>
          </div>
          <div>
          <p style={{color:"#24292E"}}>{profileInfo.company}</p>
          <p style={{marginTop:"-15px",color:"#24292E"}}>{profileInfo.location}</p>
          <p style={{marginTop:"-15px", color:"#24292E"}}>supreetsingh.247@gmail.com</p>
          </div>
          </div>
        </Col>
        <Col md={8}>
        
        <div className="w3-bar w3-white">
        <div id="myDIV">
        <ul className="tabs" style={{backgroundColor:"white",marginTop:"50px"}}>
        <li className="w3-bar-item w3-button" style={{color: "#24292E",fontWeight:"normal"}} onClick={(tabName) =>this.openTab('Overview')}>Overview</li>
        <li className="w3-bar-item w3-button" style={{color: "#24292E", borderBottom: "2px solid red"}} onClick={(tabName) =>this.openTab('Repository')}>Repositories <button style={{borderRadius:"50%",textAlign:"center"}}>{repoCount}</button></li>
        <li className="w3-bar-item w3-button" style={{color: "#24292E",fontWeight:"normal"}} onClick={(tabName) =>this.openTab('Projects')}>Projects</li>
        <li className="w3-bar-item w3-button" style={{color: "#24292E",fontWeight:"normal"}} onClick={(tabName) =>this.openTab('Packages')}>Packages</li>
        </ul>
        </div>
        </div>

        <div id="Overview" className="w3-container tab" style={{display:"none"}}>
        <h5>Popular repositories</h5>
        <p>Dummy values!!!.</p>
        </div>

        <div id="Repository" className="w3-container tab" >
        <input type="text" className="SearchBox" placeholder="Find a repository..." />
        <span>Type:
        <Types lang={this.state.repoData} />
        </span>
        <span> Language:
        <Language lang={this.state.repoData} />
        </span>
        </div>

        <div id="Projects" className="w3-container tab" style={{display:"none"}}>
        <h5>Projects</h5>
        <p>Dummy values!!!.</p>
        </div>
        <div id="Packages" className="w3-container tab" style={{display:"none"}}>
        <h5>Packages</h5>
        <p>Dummy values!!!.</p>
        </div>

        </Col>
      </Col>
      </Row>
    </div>
  );
}
}

