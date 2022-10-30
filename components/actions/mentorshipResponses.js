const constantData = require('./constants/constants.json');

async function outreachy(say) {
  let responseString = constantData.Outreachy.status ? constantData.Outreachy.activeStatement : constantData.Outreachy.notActiveStatement;
  return await say(
    responseString
  );
}

async function gsoc(say) {
  let responseString = constantData.GSoC.status ? constantData.GSoC.activeStatement : constantData.GSoC.notActiveStatement;
  return await say(
    responseString
  );
}

async function gsod(say) {
  let responseString = constantData.GSoD.status ? constantData.GSoD.activeStatement : constantData.GSoD.notActiveStatement;
  return await say(
    responseString
  );
}

module.exports = {
  outreachy,
  gsoc,
  gsod,
};
