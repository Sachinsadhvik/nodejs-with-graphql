const { mutationUser } = require('./mutation')
const { posts } = require('./object')
const { userQuery } = require('./query')

module.exports.all={
    posts,userQuery,mutationUser
};