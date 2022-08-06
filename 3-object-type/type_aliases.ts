
// Creating the aliases from an object to use is at lot of place
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
  };
  
  function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
  }
  
  function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
  }
  
  const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
      producer: "Phil Spector",
      writer: "Alex North",
    },
  };
  
  const earnings = calculatePayout(mySong);
  console.log(earnings);
  printSong(mySong);
  