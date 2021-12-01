const { DateTimeResolver, JSONResolver } = require('graphql-scalars')
const { types} = require('.')
const {
  makeSchema,
  asNexusMethod,
} = require('nexus');
const jsonScalar = asNexusMethod(JSONResolver, 'json')
const dateTimeScalar = asNexusMethod(DateTimeResolver, 'date')
 const schema = makeSchema({
    types: [types, jsonScalar, dateTimeScalar],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
module.exports.schema =schema;