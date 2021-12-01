const {postMutation} = require('./mutation')
const { value} = require('./object')
const { postQuery } = require('./query')
var x;

module.exports.posts={
 value,postQuery,postMutation
}