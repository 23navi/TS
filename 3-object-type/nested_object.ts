
  //we can have nested object in a type aliase
  type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
  };