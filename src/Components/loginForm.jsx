import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Context } from "../context/userContext/context";
import { CartContext } from "../context/CartContext/Context";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { apiDomain } from "../utils/utils"


const LoginForm = ({ onFormChange }) => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //function to redirect admin to admin page and user to home page
  const RedirectUser = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    if (user.isAdmin) {
      navigate("/admin");
      toast.success("Admin logged in Successful");
    } else {
      navigate("/home");
      toast.success("User logged in Successful");
    }
  };

  //
  const onSubmit = async (data) => {
    try {
      const { data: loginData } = await axios.post(`${apiDomain}/login/`,
        data
      );

      if (loginData.token) {
        dispatch({ type: "LOGIN_SUCCESS", payload: loginData });

        try {
          //function to create cart for user
          const cartResponse = await axios.post(`${apiDomain}/carts`, {
            userId: loginData.userId,
          });
          const cartId = cartResponse.data.cartId;
          localStorage.setItem("cartId", cartId);
          // console.log(cartId);
          RedirectUser();
        } catch (error) {
          console.log("Error creating cart:", error);
        }
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error?.response?.data?.error);
    }
  };

  return (
    <div className="homepage">
      <div className="directory-menu">
      <p>admin credentials</p> 
      <p>username: Admin</p>
      <p> password: Admin123</p>
        <form class="form" onSubmit={handleSubmit(onSubmit)}>
          <p id="heading">Login</p>
          <div class="field">
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
            <input
              autocomplete="off"
              placeholder="Username"
              class="input-field"
              type="text"
              {...register("username")}
            />
          </div>
          <div class="field">
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              type="password"
              placeholder="password"
              className="input-field"
              {...register("password")}
            />
          </div>
          <div class="btn">
            <button class="button1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button onClick={onFormChange} class="button2" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
