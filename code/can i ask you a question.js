let correctanswers = ['yeah', 'ok', 'sure','yes', 'fine', 'affermative'];
let incorrectanswers = ['no', 'no thank you', 'not really','no thanks', 'never', 'nope'];

askquestion()

function askquestion(){
    let question = prompt('can i ask you a gosh darn didly darn question')

    for (var i = 0; i<correctanswers.length; i++){
        if(question === (correctanswers[i])){
        whattype()
  
        }
}

    for (var o = 0; o<correctanswers.length; o++){
        if(question === (incorrectanswers[o])){
        alert("ok")
        }

    }   
}
function whattype(){
    let typeofquestion = prompt('Do you want to do addition, subtraction, multiplication or division')
        if(typeofquestion == ('subtraction')){
            asksubtraction()
    }
       else if(typeofquestion == ('addition')){
            askaddition()
            }else if(typeofquestion == ('multiplication')){
              askmultiplication()
              
            }else if(typeofquestion == ('division')){
              askdivision();
            } 
        
    
}
function askaddition(){
    let x = Math.floor((Math.random() * 10) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 10) + 1)
    console.log(y)
    
    let anwser = prompt('what is ' + x + ' + ' + y)
    
  if(anwser == x + y){
    
    alert('correct')
    askagain()
    }else{
        alert('incorrect')
        askagain()
    }
}
function asksubtraction(){
    let x = Math.floor((Math.random() * 100) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 99) + 1)
    console.log(y)
        
    let anwser = prompt('what is ' + x + ' - ' + y)
        
      if(anwser == x - y){
        
        alert('correct')
        askagain()
        }else{
            alert('incorrect')
            askagain()
        }
      
} 
function askmultiplication(){
  let x = Math.floor((Math.random() * 10) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 10) + 1)
    console.log(y)
        
    let anwser = prompt('what is ' + x + ' x ' + y)
        
      if(anwser == x * y){
        
        alert('correct')
        askagain()
        }else{
            alert('incorrect')
            askagain()
        }
  
  
  
  
} 
function askdivision(){
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
            askagain();
        }     else{
               alert('incorrect')
                askagain();
        }
  }else(askdivision())
} 
function askagain(){
    let do_again = prompt('Do you want to do it again?')
    for (var d = 0; d<correctanswers.length; d++){
        if(do_again === (correctanswers[d])){
        whattype()
            }
        
        }
    for (var v = 0; v<correctanswers.length; v++){
        if(do_again === (incorrectanswers[v])){
            alert("ok")
        }
    }
}