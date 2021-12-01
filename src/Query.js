// const {
//     intArg,
//     makeSchema,
//     nonNull,
//     objectType,
//     stringArg,
//     inputObjectType,
//     arg,
//     asNexusMethod,
//     enumType,
//     extendType
//   } = require('nexus')

 
//  const addLanguage = extendType({
//     type: "Mutation",
//     definition(t) {
//       t.field('AddLanguage', {
//         type: 'Language',
//         args: { language: stringArg(),
//             spoken: stringArg()   
//           },
//         resolve: (_, args, context) => {
//          return context.prisma.language.create({data:{
//       language: args.language,
//       spoken:args.spoken
//            }  })
//       },
//     },)
//     }
//   })
//     const Query = objectType({
//       name: 'Query',
//       definition(t) {
//         t.nonNull.list.nonNull.field('allUsers', {
//           type: 'User',
//           resolve: (_parent, _args, context) => {
//             return context.prisma.user.findMany()
//           },
//         })
//         t.nonNull.list.nonNull.field('showLanguages', {
//           type: 'Language',
//           resolve: (_parent, _args, context) => {
//             return context.prisma.language.findMany()
//           },
//         })
//         t.nullable.field('postById', {
//           type: 'Post',
//           args: {
//             id: intArg(),
//           },
//           resolve: (_parent, args, context) => {
//             return context.prisma.post.findUnique({
//               where: { id: args.id || undefined },
//             })
//           },
//         })
    
//         t.nonNull.list.nonNull.field('feed', {
//           type: 'Post',
//           args: {
//             searchString: stringArg(),
//             skip: intArg(),
//             take: intArg(),
//             orderBy: arg({
//               type: 'PostOrderByUpdatedAtInput',
//             }),
//           },
//           resolve: (_parent, args, context) => {
//             const or = args.searchString
//               ? {
//                   OR: [
//                     { title: { contains: args.searchString } },
//                     { content: { contains: args.searchString } },
//                   ],
//                 }
//               : {}
    
//             return context.prisma.post.findMany({
//               where: {
//                 published: true,
//                 ...or,
//               },
//               take: args.take || undefined,
//               skip: args.skip || undefined,
//               orderBy: args.orderBy || undefined,
//             })
//           },
//         })
    
//         t.list.field('draftsByUser', {
//           type: 'Post',
//           args: {
//             userUniqueInput: nonNull(
//               arg({
//                 type: 'UserUniqueInput',
//               }),
//             ),
//           },
//           resolve: (_parent, args, context) => {
//             return context.prisma.user
//               .findUnique({
//                 where: {
//                   id: args.userUniqueInput.id || undefined,
//                   email: args.userUniqueInput.email || undefined,
//                 },
//               })
//               .posts({
//                 where: {
//                   published: false,
//                 },
//               })
//           },
//         })
//       },
//     })
  
//     const Language1 = objectType({
//         name: 'Language',
//         definition(t) {
//           t.string('language')
//           t.string('spoken')
//         },
//       }) 
//       module.exports.addLanguage=addLanguage;
//       module.exports.Query=Query;
//       module.exports.Language1=Language1;
