const getInstagramProfile = () => {
  return {
    isSuccess: true,
    userProfile: {
      id: "1234",
      username: "kimyegang42",
    },
  };
};

const openInstagram = () => {
  return true;
};

export default { getInstagramProfile, openInstagram };
