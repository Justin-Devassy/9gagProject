// export const isUserLoggedIn = input => {
//   return (dispatch, getState) => {
//     dispatch({
//       type: 'isUserLoggedIn',
//       payload: {isLoggedIn: input},
//     });
//   };

//   //sends true or false
// };
export const isUserLoggedIn = input => {
  //console.log('actionsssss', input);
  return {
    type: 'isUserLoggedIn',
    payload: input,
  };
};

export const checkCredentials = input => {
  return (dispatch, getState) => {
    dispatch({
      type: 'checkCredentials',
      payload: {isLoggedIn: input},
    });
  };
};
export const saveUser = input => {
  // console.log('action', input);
  return (dispatch, getState) => {
    dispatch({
      type: 'saveUser',
      payload: input,
    });
  };
};
export const saveUserName = input => {
  // console.log('action', input);
  return (dispatch, getState) => {
    dispatch({
      type: 'saveUserName',
      payload: {loggedInUserName: input},
    });
  };
};
export const savePost = input => {
  console.log('action', input);
  return {
    type: 'savePost',
    payload: input,
  };
};
export const newSavePost = input => {
  console.log('action', input);
  return {
    type: 'newSavePost',
    payload: input,
  };
};
export const getSearchData = input => {
  console.log('actionsssss', input);
  return {
    type: 'getSearchData',
    payload: input,
  };
};

export const newDownvotedPost = input => {
  console.log('action', input);
  return {
    type: 'newDownvotedPost',
    payload: input,
  };
};
export const newUpvotedPost = input => {
  console.log('action', input);
  return {
    type: 'newUpvotedPost',
    payload: input,
  };
};
export const latestDownvotedPost = input => {
  console.log('action', input);
  return {
    type: 'latestDownvotedPost',
    payload: input,
  };
};
export const latestUpvotedPost = input => {
  console.log('action', input);
  return {
    type: 'latestUpvotedPost',
    payload: input,
  };
};
