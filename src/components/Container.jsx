// export function Container(firstName) {
//   return <p>Hello {firstName}</p>;
// }
// function Text() {
//   return (
//     <div>
//       <Container firstName="Bataa" />
//     </div>
//   );
// }
// export default Text;
export function Container(props) {
  return <p>Hello {props.firstName}</p>;
}

function Text() {
  return (
    <div>
      <Container firstName="Bataa" />
    </div>
  );
}

export default Text;
