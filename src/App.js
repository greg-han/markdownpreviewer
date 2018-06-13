import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
var myMarked = require('marked');
myMarked.setOptions({
 renderer : new myMarked.Renderer(),
 gfm: true
});

class App extends Component {
  render() {
   return (
     <div>
    <Windows / >
    <Navbar / >
    <Modal / >
     </div>
   );
  }
};


class Navbar extends React.Component {
  render(){
   return (
  <div>
  <div className="navbar">
  <span className="navtext">
  Markdown Previewer
  </span>
  </div>
  </div>
  ); 
 }
};

class Windows extends React.Component{
constructor(props){
 super(props);
 this.state ={
  input : '',
  markdown : ''
 };
 this.handleChange = this.handleChange.bind(this);
}
componentDidMount() {
document.getElementById('preview').innerHTML = myMarked(defaultString);
this.setState({
input : defaultString
});
}
handleChange(event){
  this.setState({
    input : event.target.value 
  }); 
  this.setState({
   markdown : myMarked(this.state.input)
  });
}
 render(){
   return(
<div>
<SplitterLayout>
<div className="leftPane">
<textarea id="editor" value={this.state.input} style={{resize:'none', height:'100%',width:'100%',fontSize:'16px'}} onChange={this.handleChange}>
</textarea>
</div>
<div id="preview" className="rightPane" dangerouslySetInnerHTML={{__html : this.state.markdown}}></div>
</SplitterLayout>
</div>
);
}
};



class Modal extends React.Component{
 constructor(props){
  super(props);
  this.state = {
   clicked : false,
  };
 this.changeButton = this.changeButton.bind(this);
}

changeButton(){
if(this.state.clicked === false){
 this.setState(
  {clicked : true}
 );
}
else{
 this.setState(
  {clicked : false} 
 );
}
 this.checkModal();
}

checkModal(){
 if(this.state.clicked === true){
 document.getElementById("myModal").style.display = "block";
 }
 else{
 document.getElementById("myModal").style.display ="none";
 }
}
 render(){
  return(
   <div>
   <button id="myBtn" onClick={this.changeButton}>Instructions</button>
   <div id="myModal" className="modal">
   <div className="modal-content" >
   <span className="close" onClick={this.changeButton}>&times;  </span> 
<br/><br/>
<h1>Welcome to my markdown previewer.</h1> To use it, simply type markdown into the left pane, and it will automatically be conerted into markdown in the right pane.<br/>
You can "grab" the center bar and slide it left and right to change the size of the windows. <br/>
A cheatsheet for markdown is provided below: <br/><br/>
Headings:<br/>
--------<br/>
&#35; H1<br/>
&#35;&#35; H2<br/>
&#35;&#35;&#35; H3<br/>
<br/>
Heading ID:<br/>
&#35;&#35;&#35; My Great Heading &#123;#35;custom-id&#125;<br/>
<br/>
Footnote:<br/>
---------<br/>
Here's a sentence with a footnote.[^1]<br/>
[^1]: this is the footnote<br/>
<br/>
Font Formatting:<br/>
---------------<br/>
**bold text**
<br/><br/>
*italicized text*
<br/><br/>
Blockquote:<br/>
-----------<br/>
> blockquote<br/>
<br/>
Horizontal Rule:<br/>
----------------<br/>
---<br/>
<br/>
Lists:<br/>
------<br/>
Ordered List:<br/>
1. First item<br/>
2. Second Item<br/>
3. Third Item<br/>
<br/>
Unordered List:<br/>
- First item<br/>
- Second item<br/>
- Third item<br/>
<br/>
Task list:<br/>
-[x] write the press release<br/>
-[ ] update the website<br/>
-[ ] contact the media<br/>
<br/>
Code:<br/>
-------<br/>
&#96; code &#96; <br/>
&#96;&#96;&#96; blockcode &#96;&#96;&#96;<br/>
<br/>
Links and images:<br/>
------------------<br/>
[title](https:www.link.com)<br/>
<br/>
Image:<br/>
![alt text](image.jpg)<br/>
<br/>
Table:<br/>
------<br/>
| Syntax      | Description |<br/>
| ----------- | ----------- |<br/>
| Header      | Title       |<br/>
| Paragraph   | Text        |<br/>
<br/>
Markdown cheat sheet made with the help of this place:<br/>
https://www.markdownguide.org/cheat-sheet/
</div>
</div>
</div>
 );
 }
}


const defaultString = `# My Markdown Previewer

## I literally made this while I was sleeping on a roof.

### I did this mainly to learn react! React is pretty sick.

![React Logo w/ Text](https://goo.gl/Umyytc)

Here is a link:
[links](https://www.freecodecamp.com)

Here is a list of things I want to do:
1. Change the way people interpret their perspectives.
2. Learn how to build serious full stack stuff and take my ideas to real fruition that you can interact with.
3. Once I am done with learning full stack, I will use all of the ML knowledge I know and make my ideas learn from themselves!

Here is some inline code using backticks \`function fahQ(idea){
return fahQ(idea)
}\`

Here is a block of code using triple backticks:
\`\`\`
var variable = "randomstring"
randomString.forEach(element,function{
element = "You should use es6 arrows for this"
});
\`\`\`

Here is a blockquote using(>)

>I could say this in some epic way, but really, most of these quotes are about a person helping someone or improving themselves in some way.

**Don't forget to be inspired by random shit that you say and read everyday.**`;
export default App;
