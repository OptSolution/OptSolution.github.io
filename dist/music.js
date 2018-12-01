const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#dddddd',
    audio: [
      {
        name: '归来',
        artist: '纵贯线',
        url: 'https://m8.music.126.net/20181201182211/7654a21484627b6a9069520f67f71824/ymusic/4f80/ebdc/2a5f/1f1168ebd6efcaa7b72145204b8c2903.mp3',
        cover: 'http://p1.music.126.net/CZQlP4Qgy2jbk22BKyDkUA==/120946279068589.jpg',
      }
    ]
});