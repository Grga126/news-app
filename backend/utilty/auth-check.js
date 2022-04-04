export const authCheck = (req, res) => {
  if (req.user) {
    return true;
  }
  return false;
};
