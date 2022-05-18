const gameBtn = document.querySelector(".game-box #btn");

const baseNumber = document.querySelector(".number-select-box input");
const guessNumber = document.querySelector("input.guess-num");

const resultValue = document.querySelector(".user_chose");
const result = document.querySelector("#result");

// 클래스 추가/제거
//const HIDDEN_CLASSNAME = "hidden";
const POINT_CLASSNAME = "point";

function randomGame(event) {
    event.preventDefault();
    
    const baseValue = Math.abs(parseInt(baseNumber.value, 10));
    const guessValue = Math.abs(parseInt(guessNumber.value, 10));
    const randomNumber = Math.ceil(Math.random() * baseValue);

    guessNumber.value = guessValue;
    baseNumber.value = baseValue;

    //값을 입력하지 않았을 때
    if(baseNumber.value === "") {
        //텍스트 입력란의 값이 현재 비어있을 때, Null 즉, 화면상에서는 ""일 때 조건문이 참이 돼서 알림창 뜸.

        baseNumber.focus();//입력하지 않았을 때 input이 focus됨
        alert("Please write max number");//입력하지 않았을 때 알림창이 뜸
    } else if(guessNumber.value === "") {
        guessNumber.focus();
        alert("Please write guess number");
    } else {
        //resultArea.classList.remove(HIDDEN_CLASSNAME); //조건이 만족했을 때 "hidden" class를 삭제

        //유저가 입력한 값 & 랜덤 숫자 출력
        resultValue.innerHTML = `You chose: <span class="color">${guessValue}</span> <br> The machine chose: <span class="color2">${randomNumber}</span>`;

        if(guessValue === randomNumber) {
            result.innerHTML = "Congratulation!<br>You won!"
            result.classList.add(POINT_CLASSNAME); //"point" class를 추가해서 CSS로 강조
        } else {
            result.innerHTML = "You lost!"
            result.classList.remove(POINT_CLASSNAME);//"point" class를 삭제
        }
    }

}


gameBtn.addEventListener("click", randomGame);