async function isWorkspaceAdmin(client, userId) {
  try {
    const userInfo = await client.users.info({
      user: userId,
    });
    return userInfo.user.is_admin || userInfo.user.is_owner;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

async function isWorkspaceOwner(client, userId) {
  try {
    const userInfo = await client.users.info({
      user: userId,
    });
    return userInfo.user.is_owner;
  } catch (error) {
    console.error("Error checking owner status:", error);
    return false;
  }
}

module.exports = { isWorkspaceAdmin, isWorkspaceOwner };
