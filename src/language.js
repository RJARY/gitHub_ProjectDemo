import React from "react";
import "./App.css";

export default class Language extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            repoData:[]
        }
    }
    componentWillReceiveProps(props){
    this.setState({repoData:props.lang})
    }
    languageChange= (e) => {
        var languageKey =e.target.value;
        if(languageKey !== "All"){
        var repoDataFiltered = this.props.lang.filter(item =>{return (item.language === languageKey)});
        this.setState({repoData:repoDataFiltered});
        }
        else {
            this.setState({repoData:this.props.lang}); 
        }
    
      }
    render(){
        var repoInfo = this.state.repoData;
        return(
            <React.Fragment>
            <select label="Type" className="SelectBox" onChange={this.languageChange}>
            <option className="SelectOption" value="All" > All</option>
            <option className="SelectOption" value="HTML" > HTML </option>
            <option className="SelectOption" value="JavaScript" > JavaScript</option>
            <option className="SelectOption" value="CSS" > CSS</option>
            </select>
            <hr style={{marginBottom:"30px"}} />
        {repoInfo.length !== 0 ? repoInfo.map((item,i)=>{return (<>
        <span className="RepoName">{item.name} </span>
        <div>
        <span className="dot"></span>
        <span style={{color:"#586069",fontSize:"14px"}}> {item.language === null ? "HTML" : item.language} </span>
        <span style={{color:"#586069",marginLeft:"30px"}}> Updated on {item.updated_at}</span>
        <span style={{color:"#586069", fontSize:"13px", float:"right", marginRight:"60px"}}><button style={{borderRadius:"5px"}}>Star</button></span>
        </div>
        <hr style={{marginTop:"30px"}}/>
        </>)}) : <></>}
            </React.Fragment>
        )
    }
}