import { GraphQLServer } from 'graphql-yoga'
// Types: 5 Scalar types
// String, Boolean, Int, Float, ID
// Type definitions (applications schema) query definitions
const typeDefs = `
  type Query {
    add(a: Float!, b: Float!): Float!
    greeting(name: String, position: String): String!
    me: User!
    post: Post!
  }
  type User {
    id: ID!,
    name: String!
    email: String!
    age: Int
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`
// Resolvers (functions)
const resolvers = {
	Query: {
		add(parent, args){
			return args.a+args.b
		},
		greeting(parent, args){
			return `Hello${args.name? ` ${args.name}!` : '!' }${args.position? ` Your my favorite ${args.position}` : ''}`
		},
		me(){
			return {
				id: 1234,
				name: 'Glenda',
				email: 'glenda.salas.a@gmail.com',
			}
		},
		post(){
			return {
				id: 12345,
				title: 'A girl walks alone at night',
				body: 'Wow',
				published: true,
			}
		}
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})

server.start(()=>{
  console.log('the server is up');
})
