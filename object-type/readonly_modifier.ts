type User = {
    readonly id: number;
    username: string;
  };
  
  const user: User = {
    id: 12837,
    username: "catgurl",
  };
  
  console.log(user.id);
  user.id;

  //user.id=4343;   //can't doo