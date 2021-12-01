

const {
    intArg,
    makeSchema,
    nonNull,
    objectType,
    stringArg,
    inputObjectType,
    arg,
    asNexusMethod,
    enumType,
    extendType,queryType
  } = require('nexus')



 const usersQueryField = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.nonNull.field('showLanguages', {
        type: 'Language',
        resolve: (_parent, _args, context) => {
          return context.prisma.language.findMany()
        },
      })
    },
  })
  
  module.exports.usersQueryField=usersQueryField;
