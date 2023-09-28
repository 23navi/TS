import { useState } from "react";
const GuestList = (): JSX.Element => {
  const [input, setInput] = useState("");
  const [guestList, setGuestList] = useState<String[]>([]);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // this is async.. to do what we wanted to do.
    const inputNew = input;
    setInput((current) => {
      return "";
    });
    setGuestList((guestList) => [...guestList, inputNew]);
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
