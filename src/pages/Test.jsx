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
import { List1 } from "../components/Test-Props-DuluuBagsh/List1";
import { List2 } from "../components/Test-Props-DuluuBagsh/List2";
import { List3 } from "../components/Test-Props-DuluuBagsh/List3";

const Home = ({ name }) => {
  const array = [
    {
      name: "Duluu",
      score: "100",
      lastName: "Bill",
      age: 121212,
      work: "Pinecone",
    },
    {
      name: "Dashka",
      score: "69",
      lastName: "Bill",
      age: 121212,
      work: "Pinecone",
    },
  ];
  return (
    <div>
      {array.map((el) => (
        <List1 />
      ))}
      {/* <List2 />
      <List3 /> */}
    </div>
  );
};

export default Home;
