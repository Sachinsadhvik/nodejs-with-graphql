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
    extendType
  } = require('nexus')

const addLanguage = extendType({
    type: "Mutation",
    definition(t) {
      t.field('AddLanguage', {
        type: 'Language',
        args: { language: stringArg(),
            spoken: stringArg()   
          },
        resolve: (_, args, context) => {
         return context.prisma.language.create({data:{
      language: args.language,
      spoken:args.spoken
           }  })
      },
    },)
    }
  })

module.exports.addLanguage= addLanguage;