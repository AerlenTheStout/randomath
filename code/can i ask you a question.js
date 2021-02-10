let correctanswers = ['yeah', 'ok', 'sure','yes'];
let incorrectanswers = ['no', 'no thank you', 'not really','no thanks', 'never'];

askquestion()

function askquestion(){
    let question = prompt('can i ask you a question')

    for (var i = 0; i<correctanswers.length; i++){
        if(question === (correctanswers[i])){
        askaddition()
  
        }
}

    for (var o = 0; o<correctanswers.length; o++){
        if(question === (incorrectanswers[o])){
        alert("ok")
        }

    }   
}
function whattype(){
    let type = prompt('Do you want to do addition or subtraction')
    if(type = 'addition'){
        askaddition()
    }
    if(type = 'subtraction'){
        asksubtraction()
    }
}
function askaddition(){
    let x = Math.floor((Math.random() * 100) + 1)
    console.log(x)
    let y = Math.floor((Math.random() * 100) + 1)
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
function askagain(){
    let do_again = prompt('Do you want to do it again?')
    for (var d = 0; d<correctanswers.length; d++){
        if(do_again === (correctanswers[d])){
        askaddition()
            }
        
        }
    for (var v = 0; v<correctanswers.length; v++){
        if(do_again === (incorrectanswers[v])){
            alert("ok")
        }
    }
}
