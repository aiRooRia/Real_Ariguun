// import { List1 } from "../components/Test-Props-DuluuBagsh/List1";

// const array = [
//   {
//     name: "Duluu",
//     score: "100",
//     lastName: "Bill",
//     age: 121212,
//     work: "Pinecone",
//   },
//   {
//     name: "Dashka",
//     score: "69",
//     lastName: "Bill",
//     age: 121212,
//     work: "Pinecone",
//   },
// ];
// export default function Test() {
//   return (
//     <div>
//       {array.map((el) => (
//         <>
//           <List1 name={el.name} />
//         </>
//       ))}
//     </div>
//   );
// }

import { List1 } from "../Test-Props-DuluuBagsh/List1";
// import { List2 } from "../Test-Props-DuluuBagsh/List2";
// import { List3 } from "../Test-Props-DuluuBagsh/List3";
const Home = () => {
  return (
    <div>
      <p>
        <List1 />
      </p>
      <p>{/* <List2 /> */}</p>
      <p>{/* <List3 /> */}</p>
    </div>
  );
};

export default Home;
