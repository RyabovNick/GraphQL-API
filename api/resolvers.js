import pool from ".././config/config";

let data = [];

pool.query("Select * from students", (err, result) => {
  if (err) throw err;

  data = result;
});

const resolvers = {
  Query: {
    allStudents: () => {
      return data;
    },
    student: (root, { n_z }) => {
      return data.filter(people => {
        console.log("people: ", people);
        return people.n_z === n_z;
      })[0];
    }
  }
};

export default resolvers;
