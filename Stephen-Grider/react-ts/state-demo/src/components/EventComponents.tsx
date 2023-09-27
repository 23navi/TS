import { useRef } from "react";
export function EventComponent(): JSX.Element {
  const bRef = useRef<HTMLHeadingElement | null>(null);

  return <h1 ref={bRef}></h1>;
}
