const config = require("../../config");

async function outreachy(say) {
  const { status, activeStatement, notActiveStatement } = config.outreachy;
  const response = status ? activeStatement : notActiveStatement;
  return await say(response);
}

async function googleSummerOfCode(say) {
  const { status, activeStatement, notActiveStatement } = config.googleSummerOfCode;
  let response = status ? activeStatement : notActiveStatement;
  return await say(response);
}

async function googleSeasonOfDocs(say) {
  const { status, activeStatement, notActiveStatement } = config.googleSeasonOfDocs;
  let response = status ? activeStatement : notActiveStatement;
  return await say(response);
}

module.exports = {
  outreachy,
  googleSummerOfCode,
  googleSeasonOfDocs,
};
