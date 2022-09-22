import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import { toast } from "react-toastify";
import swal from "sweetalert";

const myheader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors",
};

export const postLogin = (data, toggle) => (dispatch) => {
  dispatch(loginLoading(true));
  console.log(data, myheader);
  return fetch(baseUrl + "login", {
    method: "POST",
    headers: myheader,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((login) => {
      console.log("login response", login);
      if (login.message == "Bad creds") {
        swal({
          title: "Invalid credentials",
          icon: "error",
        });
      } else {
        if (login.user.email_verified == 0) {
          swal({
            title: "You need to verify your email!",
            icon: "warning",
          });
        } else {
          if (toggle) {
            toggle();
          }
          swal({
            title: "Login Successfull!",
            icon: "success",
          });
          dispatch(addLogin(login));
        }
      }
    })
    .catch((error) => {
      dispatch(loginFailed(error));
    });
};
export const addLogin = (login) => ({
  type: ActionTypes.ADD_LOGIN,
  login: login,
});

export const loginLoading = () => ({
  type: ActionTypes.LOGIN_LOADING,
});

export const loginFailed = (errMess) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: errMess,
});

export const removeLogin = () => ({
  type: ActionTypes.REMOVE_LOGIN,
  login: [],
});
