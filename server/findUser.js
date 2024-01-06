const { Users } = require("./models");

function hasEmailOnly(obj) {
    return obj.hasOwnProperty("email") && !obj.hasOwnProperty("name");
}

async function findBy(reqBody) {
    if (hasEmailOnly(reqBody)) {
        const res = await Users.findOne({ where: { email: reqBody.email } });
        return res
    } else {
        const res = await Users.findOne({ where: { name: reqBody.name } });
        return res
    }
}

module.exports = findBy;