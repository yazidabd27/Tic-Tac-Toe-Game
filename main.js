let cells=Array.from(document.querySelectorAll('.game div'));
let theGame=document.querySelector('.game');
let winner=document.querySelector('.winner');
let win=document.querySelector('.win');
let reload=document.querySelector('.reload');

let turn='X';
let counter=0;
let winning=false;

cells.forEach(cell=>{
    cell.onclick=function(){
        if(cell.textContent==''){
            if(turn=='X'){
                cell.innerHTML=turn;
                cell.style.color='blue';
                turn='O';
            }else{
                cell.innerHTML=turn;
                cell.style.color='red'
                turn='X'
            }
            counter++;
            checkWin();
            checkDraw();
        }
    }
})

let winCases=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function checkWin(){
    winCases.forEach(arr=>{
        if(cells[arr[0]].textContent!='' && cells[arr[1]].textContent!='' && cells[arr[2]].textContent!=''){
            if(cells[arr[0]].textContent == cells[arr[1]].textContent && cells[arr[0]].textContent == cells[arr[2]].textContent){
                winner.innerHTML=cells[arr[0]].textContent;
                winner.textContent=='O' ? winner.style.color='red' : winner.style.color='blue';
                win.style.display='block';
                theGame.style.pointerEvents='none';
                winning=true;
            }
        };
    });
};

function checkDraw(){
    if(counter==9 && winning==false){
        console.log('draw')
        win.innerHTML='DRAW';
        win.style.display='block';
    }
}

reload.onclick=function(){
    location.reload()
}



