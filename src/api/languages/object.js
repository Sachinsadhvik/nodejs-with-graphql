const {
    objectType,
    stringArg,
    inputObjectType,
    arg,
    asNexusMethod,
    enumType,
    extendType
  } = require('nexus')

const Language1 = objectType({
    name: 'Language',
    definition(t) {
      t.string('language')
      t.string('spoken')
    },
  }) 
  module.exports.Language1=Language1;