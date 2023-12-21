const { Users } = require("./models");

function hasEmailOnly(obj) {
    return obj.hasOwnProperty("email") && !obj.hasOwnProperty("name");
}

async function findBy(reqBody) {
    if (hasEmailOnly(reqBody)) {
        return await Users.findOne({ where: { email: reqBody.email } });
    } else {
        return await Users.findOne({ where: { name: reqBody.name } });
    }
}

module.exports = findBy;