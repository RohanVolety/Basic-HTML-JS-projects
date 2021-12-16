console.log("welcome to javascript");


let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay")
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName('songItem'))




let songs=[
{songName:"1",filepath:"1.mp3",coverPath:"2.jpg"},
{songName:"2",filepath:"2.mp3",coverPath:"3.jpg"},
{songName:"3",filepath:"3.mp3",coverPath:"4.jpg"},
{songName:"4",filepath:"4.mp3",coverPath:"5.jpg"},
{songName:"5",filepath:"5.mp3",coverPath:"6.jpg"},
{songName:"6",filepath:"6.mp3",coverPath:"7.jpg"},
{songName:"7",filepath:"7.mp3",coverPath:"8.jpg"},
{songName:"8",filepath:"8.mp3",coverPath:"9.jpg"},
{songName:"9",filepath:"9.mp3",coverPath:"10.jpg"},
{songName:"10",filepath:"10.mp3",coverPath:"1.jpg"},

]
songItems.forEach((element,i)=>{


element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;



})

masterPlay.addEventListener('click',()=>{
			if(audioElement.paused||audioElement.currentTime<=0){
				audioElement.play();
				masterPlay.classList.remove('fa-play-circle');
				masterPlay.classList.add('fa-pause-circle');
				gif.style.opacity=1;
			}
			else{
				audioElement.pause();
				masterPlay.classList.remove('fa-pause-circle');
				masterPlay.classList.add('fa-play-circle');
				gif.style.opacity=0;

			}


})
audioElement.addEventListener('timeupdate',()=>{




progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myprogressbar.value=progress;

})


myprogressbar.addEventListener('change',()=>{
audioElement.currentTime=myprogressbar.value *audioElement.duration/100;	



})

const makeAllplays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');



})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
	 
	makeAllplays();
	songIndex=parseInt(e.target.id);
	e.target.classList.remove('fa-play-circle');
	e.target.classList.add('fa-pause-circle');
	audioElement.src='${songIndex}.mp3';
	audioElement.currentTime=0;
	audioElement.play();
	masterPlay.classList.remove('fa-play-circle');
	masterPlay.classList.add('fa-pause-circle');

})

})

  document.getElementById


