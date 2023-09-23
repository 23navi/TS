import { useState } from "react";
const GuestList = (): JSX.Element => {
  const [input, setInput] = useState("");
  const [guestList, setGuestList] = useState<String[]>([]);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setInput((current) => {
      return "";
    });
    setGuestList((guestList) => [...guestList, input]);
    console.log(guestList);
  };

  const renderGuestList = guestList.map((guest, index) => {
    return <li key={guest as React.Key}>{guest}</li>;
  });

  return (
    <div>
      {renderGuestList}
      <form>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export { GuestList };
