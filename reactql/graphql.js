const { ApolloServer, gql } = require('apollo-server-lambda');

const machines = [
  {
    instanceId: 'instance1_1',
    groupName: 'api',
  },
  {
    instanceId: 'instance2_2',
    groupName: 'api',
  },
  {
    instanceId: 'instance3_3',
    groupName: 'api',
  },
  {
    instanceId: 'instance4_4',
    groupName: 'api',
  },
  {
    instanceId: 'instance5_5',
    groupName: 'api',
  },
];

const typeDefs = gql`
  type Machine {
    instanceId: String
    groupName: String
  }

  type Query {
    machines: [Machine]
  }
`;

const resolvers = {
  Query: {
    machines: () => machines,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({event, context}) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  introspection: true,
  playground: true
});

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
