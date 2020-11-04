import React from "react";
import "./App.css";

export default class Types extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            repoData:[]
        }
    }
    componentWillReceiveProps(props){
    this.setState({repoData:props.type})
    }
    languageChange= (e) => {
        var typeKey =e.target.value;
        if(typeKey !== "All"){
        var repoDataFiltered = this.props.type.filter(item =>{return (item.language === typeKey)});
        this.setState({repoData:repoDataFiltered});
        }
        else {
            this.setState({repoData:this.props.type}); 
        }
    
      }
    render(){
        // var repoInfo = this.state.repoData;
        return(
            <React.Fragment>
            <select title="Type" className="SelectBox" >
        <option className="SelectOption" value="All"> All</option>
        <option className="SelectOption"  value="Public"> Public</option>
        <option className="SelectOption"  value="Private"> Private</option>
        <option className="SelectOption"  value="Sources"> Sources</option>
        <option className="SelectOption"  value="Forks"> Forks</option>
        <option className="SelectOption"  value="Archived"> Archived</option>
        <option className="SelectOption"  value="Mirrors"> Mirrors</option>
        </select>
        {/* {repoInfo.length !== 0 ? repoInfo.map((item,i)=>{return (<>
        <span className="RepoName">{item.name} </span>
        <div>
        <span className="dot"></span>
        <span style={{color:"#586069",fontSize:"14px"}}> {item.language === null ? "HTML" : item.language} </span>
        <span style={{color:"#586069",marginLeft:"30px"}}> Updated on {item.updated_at}</span>
        <span style={{color:"#586069", fontSize:"13px", float:"right", marginRight:"60px"}}><button style={{borderRadius:"5px"}}>Star</button></span>
        </div>
        <hr style={{marginTop:"30px"}}/>
        </>)}) : <></>} */}
            </React.Fragment>
        )
    }
}