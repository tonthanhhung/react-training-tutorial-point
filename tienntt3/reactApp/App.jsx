import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
   };

   render() {
      return (
          <div>
            <AddComponent/>
         </div>
      );
   }
}

class AddComponent extends React.Component{
    constructor(props) {
      super(props);
		
      this.state = {
         arrayItem: [],
         addValue: ""
      }

      this.setOnChangeValue = this.setOnChangeValue.bind(this);
      this.setAddValue = this.setAddValue.bind(this);
      this.onSwap = this.onSwap.bind(this);
      this.onTop = this.onTop.bind(this);
   }
   setOnChangeValue(e) {
      this.setState({addValue: e.target.value});
      console.log(this.state.addValue);
   }

   setAddValue(event) {
        var item = this.state.arrayItem.slice();
        item.push(this.state.addValue);
        this.setState({arrayItem: item});
       
   } 

   onSwap(x, y){
       var item = this.state.arrayItem.slice();
        var temp = item[x];
        item[x] = item[y];
        item[y] = temp;
        this.setState({arrayItem: item});
   }

   onTop(x){ 
       var y = 0;
       this.onSwap(x,0); 
   }

   moveUp(x){
        if(x>0){
            var y = x--;
            this.onSwap(x,y);  
        }
   }
   moveDown(x){
        if(x< this.state.arrayItem.length-1){
            var y = x++;
            this.onSwap(x,y);   
        }
   }

    render(){
        return (
            <div>
                <input type = "text" value = {this.state.addValue} onChange = {this.setOnChangeValue}/>
                <input type = "button" value ="Add" onClick = {this.setAddValue}/>    
                
                <ul>
                    {this.state.arrayItem.map ((item , i ) =>(
                        <li key = {i}>
                            
                            <span>{i} - </span>
                            <span>{item} </span>
                            <input type = "button" value ="Top" onClick = {() => this.onTop(i)}/> 
                             <input type = "button" value ="Up" onClick = {() => this.moveUp(i)}/> 
                              <input type = "button" value ="Down" onClick = {() => this.moveDown(i)}/> 
                        </li>
                    )
                    )}
                </ul>   
            </div>        
        );
    }
}

export default App;