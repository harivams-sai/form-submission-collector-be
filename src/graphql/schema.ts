const schema = `#graphql
  scalar DateTime
  scalar JSON
  type Query {
    submissions: [Submission]
  }

  type Submission {
    id: ID!
    submittedAt: DateTime!
    data: JSON
  }
`;

export default schema;