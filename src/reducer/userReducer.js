const initialstate = {
  isLoggedIn: false,
  existingUsers: [
    {
      name: 'Justin Devassy',
      email: 'Justin@gmail.com',
      password: '12345678j',
    },
  ],
  loggedInUserName: '',
  posts: [],
  saved: [],
  upVoted: [],
  downVoted: [],
  search: [],
};
const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'isUserLoggedIn':
      // return {...state, ...action.payload};
      return {
        ...state,
        isLoggedIn: action.payload,
      };
      break;
    case 'checkCredentials':
      //   console.log('check', action.payload);
      return {...state, ...action.payload};
      break;
    case 'saveUser':
      //console.log('check', action.payload);
      return {
        ...state,
        existingUsers: [...state.existingUsers, action.payload],
      };
      break;
    case 'saveUserName':
      //console.log('check', action.payload);
      return {
        ...state,
        ...action.payload,
      };
      break;
    case 'savePost':
      //console.log('check', action.payload);
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };
      break;
    case 'newSavePost':
      //console.log('check', action.payload);
      return {
        ...state,
        saved: action.payload,
      };
      break;
    case 'getSearchData':
      console.log('check', action.payload);
      return {
        ...state,
        search: action.payload,
      };
      break;
    case 'newDownvotedPost':
      //console.log('check', action.payload);
      return {
        ...state,
        downVoted: [...state.downVoted, action.payload],
      };
      break;
    case 'newUpvotedPost':
      //console.log('check', action.payload);
      return {
        ...state,
        upVoted: [...state.upVoted, action.payload],
      };
      break;
    case 'latestDownvotedPost':
      //console.log('check', action.payload);
      return {
        ...state,
        downVoted: action.payload,
      };
      break;
    case 'latestUpvotedPost':
      //console.log('check', action.payload);
      return {
        ...state,
        upVoted: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
