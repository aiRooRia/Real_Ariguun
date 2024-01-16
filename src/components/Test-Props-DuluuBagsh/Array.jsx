

export const Array = () => {
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
    <>
      {array.map((el) => (
        <DestractureArray
          name={el.name}
          score={el.score}
          lastName={el.lastName}
          age={el.age}
          work={el.work}
        />
      ))}
    </>
  );
};
