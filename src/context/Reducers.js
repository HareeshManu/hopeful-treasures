import axios from 'axios';

const REGISTER_USER = 'REGISTER_USER';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      let user = action.payload;
      let users =  localStorage.getItem('userList');
      users = JSON.parse(users);
      if(user.username === "admin" && user.password === "test"){
        return { ...state, isAdminLoggedIn: true, isUserLoggedIn: false };
      }

      else if(users?.length>0){
        if(users.find(obj => obj.email === user.username)){
          return { ...state, isUserLoggedIn: true, isAdminLoggedIn: false };
        }
      }
    case REGISTER_USER:
      return { ...state, error: null };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem('userList', JSON.stringify([...state.users, action.payload]));
      return { ...state, users: [...state.users, action.payload]};
    case REGISTER_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "REPORTS":
      return { ...state,  earnings: 175,orders: 3, balance: 15, totalsales: 60 };
      
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};

export const registerUser = async (dispatch, userData) => {
  dispatch({ type: REGISTER_USER });
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', userData);
console.log('re', response);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
  }
};