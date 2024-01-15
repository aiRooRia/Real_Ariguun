export const ParentComponent = () => {
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
        <>
          <ChildComponent
            name={el.name}
            score={el.score}
            lastName={el.lastName}
            age={el.age}
            word={el.work}
          />
        </>
      ))}
    </div>
  );
};
