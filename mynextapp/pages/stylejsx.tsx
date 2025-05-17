function Heading(props: { heading: string }) {
  return (
    <div>
      <h1>Hello this is {props.heading}</h1>

      <style global jsx>{`
        h1 {
          color: red;
        }
        div {
          border: 1px solid;
        }
      `}</style>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Heading heading="styles" />
      <h1>Hey</h1>
    </>
  );
}
