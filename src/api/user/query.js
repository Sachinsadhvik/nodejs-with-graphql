const {
    extendType,
  } = require('nexus')
 const userQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('allUsers', {
            type: 'User',
            resolve: (_parent, _args, context) => {
              return context.prisma.user.findMany()
            },
          })
    },
  })


  module.exports.userQuery=userQuery;