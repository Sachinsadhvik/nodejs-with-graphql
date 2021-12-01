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
    extendType,
  } = require('nexus')

  const User = objectType({
    name: 'User',
    definition(t) {
      t.nonNull.int('id')
      t.string('name')
      t.nonNull.string('email')
      t.nonNull.list.nonNull.field('posts', {
        type: 'Post',
        resolve: (parent, _, context) => {
          return context.prisma.user
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .posts()
        },
      })
    },
  })
  
  
 const SortOrder = enumType({
    name: 'SortOrder',
    members: ['asc', 'desc'],
  })
  
//  const PostOrderByUpdatedAtInput = inputObjectType({
//     name: 'PostOrderByUpdatedAtInput',
//     definition(t) {
//       t.nonNull.field('updatedAt', { type: 'SortOrder' })
//     },
//   })
  
const UserUniqueInput = inputObjectType({
    name: 'UserUniqueInput',
    definition(t) {
      t.int('id')
      t.string('email')
    },
  })
  
//  const PostCreateInput = inputObjectType({
//     name: 'PostCreateInput',
//     definition(t) {
//       t.nonNull.string('title')
//       t.string('content')
//     },
//   })
  
   const UserCreateInput = inputObjectType({
    name: 'UserCreateInput',
    definition(t) {
      t.nonNull.string('email')
      t.string('name')
      t.list.nonNull.field('posts', { type: 'PostCreateInput' })
    },
  })
  
  module.exports.posts={
    UserCreateInput,SortOrder,UserUniqueInput,User
   }