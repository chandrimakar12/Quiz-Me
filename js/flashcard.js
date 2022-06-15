const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);

function addFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value='';
    answer.value='';
}
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className='flashcard';

    h2_question.setAttribute('style',"border-top:1px solid red; text-align:center; padding: 15px; margin-top:30px;");
    h2_question.innerHTML=text.my_question;

    h2_answer.setAttribute('style',"border-top:1px solid green; text-align:center; align-items:center; display:none;padding: 15px; margin-top:30px; color:brown");
    h2_answer.innerHTML=text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click",function(){
        if(h2_answer.style.display=="none"){
         h2_answer.style.display="block";
         h2_question.style.display="none";
        }
        else{ 
         h2_answer.style.display="none";
         h2_question.style.display="block";
        }
    });

    flashcards.appendChild(div);
}

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display="block";
}

function hideCreateBox(){
    createBox.style.display="none";
}
