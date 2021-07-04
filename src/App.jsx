import React from 'react';
function App(){
var curhrs=new Date();
curhrs=curhrs.getHours();
let greeting;
let cssColor={};
if(curhrs>=1 && curhrs<=11){
    greeting='Good Morning';
    cssColor.color='tomato'
}
else if(curhrs>=12 && curhrs<=19){
    greeting='Good Afternoon';
    cssColor.color='violet'
}
else{
    greeting='Good Night';
    cssColor.color='black'
}
return(
<h1 className='heading'>Hi Dude ,<span style={cssColor}>{greeting}</span></h1>
) 
}
export default App;