// NOW CLICK album-poster TO GET CURRENT SONG ID
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'I Knew You Were Trouble',
		        artist: 'Taylor Swift',
		        url: 'source/trouble.mp3',
		        cover: 'images/red.jpg'
		    },
			{
		        name: 'Deja Vu',  // SONG NAME
		        artist: 'Olivia Rodrigo', //ARTIST NAME
		        url: 'source/deja-vu.mp3', // PATH NAME AND SONG URL
		        cover: 'images/sour.jpg' // COVER IMAGE
		    },
            {
		        name: 'Purge the Poison',  // SONG NAME
		        artist: 'Marina and the Diamonds', //ARTIST NAME
		        url: 'source/purge-the-poison.mp3', // PATH NAME AND SONG URL
		        cover: 'images/dreams.jpg' // COVER IMAGE
		    },
            {
		        name: 'Love Me More',  // SONG NAME
		        artist: 'Mitski', //ARTIST NAME
		        url: 'source/love-me-more.mp3', // PATH NAME AND SONG URL
		        cover: 'images/mitski.jpg' // COVER IMAGE
		    },
            {
		        name: 'Sacrifice',  // SONG NAME
		        artist: 'The Weeknd', //ARTIST NAME
		        url: 'source/sacrifice.mp3', // PATH NAME AND SONG URL
		        cover: 'images/dawn.jpg' // COVER IMAGE
		    },
            {
		        name: 'Easy on Me',  // SONG NAME
		        artist: 'Adele', //ARTIST NAME
		        url: 'source/easy-on-me.mp3', // PATH NAME AND SONG URL
		        cover: 'images/adele.png' // COVER IMAGE
		    },
            {
		        name: 'Kiss Me More (feat. SZA)',  // SONG NAME
		        artist: 'Doja Cat', //ARTIST NAME
		        url: 'source/kiss-me-more.mp3', // PATH NAME AND SONG URL
		        cover: 'images/planet.jpg' // COVER IMAGE
		    },
            {
		        name: 'Higher Power',  // SONG NAME
		        artist: 'Coldplay', //ARTIST NAME
		        url: 'source/higher-power.mp3', // PATH NAME AND SONG URL
		        cover: 'images/coldplay.jpg' // COVER IMAGE
		    },
		    ]
		});
        
const music = new Audio('source/deja-vu.mp3');
const songs = [
	{
		id: '1',
		songName: `Higher Power <br>
		<div class="subtitle">Coldplay</div>`,
		poster: "images/coldplay.jpg",
	},
	{
		id: '2',
		songName: `All Too Well <br>
		<div class="subtitle">Taylor Swift</div>`,
		poster: "images/red.jpg",
	},
	{
		id: '3',
		songName: `good 4 u <br>
		<div class="subtitle">Olivia Rodrigo</div>`,
		poster: "images/sour.jpg",
	},
	{
		id: '4',
		songName: `New Shapes <br>
		<div class="subtitle">Charli XCX</div>`,
		poster: "images/crash.jpg",
	}
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=> {
	element.getElementsByTagName('img')[0].src = songs[i].poster;
	element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', ()=>{
	if (music.paused || music.currentTime <=0) {
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		wave.classList.add('active2');
	} else {
		music.pause();
		masterPlay.classList.add('bi-play-fill');
		masterPlay.classList.remove('bi-pause-fill');
		wave.classList.remove('active2');
	}
})

const makeAllPlays = () => {
	Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
		element.classList.add('bi-play-circle');
		element.classList.remove('bi-pause-circle');
		})
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
index = e.target.id;
makeAllPlays();
e.target.classList.remove('bi-play-circle');
e.target.classList.add('bi-pause-circle');
music.src = `source/${index}.mp3`;
poster_master_play.src = `images/${index}.jpg`;
music.play();
let song_title = songs.filter((ele)=>{
	return ele.id == index;
})
song_title.forEach(ele =>{
	let {songName} = ele;
	title.innerHTML = songName;
})
masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
wave.classList.add('active2');
music.addEventListener('ended', ()=>{
	music.pause();
	masterPlay.classList.add('bi-play-fill');
	masterPlay.classList.remove('bi-pause-fill');
	wave.classList.remove('active2');
})
})
})