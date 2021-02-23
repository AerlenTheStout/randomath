let correctanswers = ['yeah', 'ok', 'sure','yes', 'fine', 'affermative'];
let incorrectanswers = ['no', 'no thank you', 'not really','no thanks', 'never', 'nope'];



function askAddition(){
    let x = Math.floor((Math.random() * 10) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 10) + 1)
    console.log(y)
    
    let anwser = prompt('what is ' + x + ' + ' + y)
    
  if(anwser == x + y){
    
    alert('correct')
    
    }else{
        alert('incorrect')
        
    }
}
function askSubtraction(){
    let x = Math.floor((Math.random() * 100) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 99) + 1)
    console.log(y)
        
    let anwser = prompt('what is ' + x + ' - ' + y)
        
      if(anwser == x - y){
        
        alert('correct')
        
        }else{
            alert('incorrect')
            
        }
      
} 
function askMultiplication(){
  let x = Math.floor((Math.random() * 10) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 10) + 1)
    console.log(y)
        
    let anwser = prompt('what is ' + x + ' x ' + y)
        
      if(anwser == x * y){
        
        alert('correct')
        
        }else{
            alert('incorrect')
            
        }
  
  
  
  
} 
function askDivision(){
  let x = Math.floor((Math.random() * 100) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 99) + 1)
    console.log(y)
    let checkifdecimal = (x / y) 
    let checkfordecimal = (checkifdecimal % 1)
      if(checkfordecimal == 0){
        let anwser = prompt('what is ' + x + ' ÷ ' + y)
    
          if(anwser == x / y){
        
            alert('correct')
            
        }     else{
               alert('incorrect')
                
        }
  }else(askDivision())
} 
