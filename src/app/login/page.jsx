"use client";
import React, { useState, useContext } from "react";
import "../style/login.css";
import { Container, Row, Col, FormGroup, Button, Form } from "reactstrap";
import Link from "next/link";
import loginImg from "../../../assets/images/login.png";
import userIcon from "../../../assets/images/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

// fetch data for login from server
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const router = useRouter();

  const handleChange = (e) => {
    setCredentials((preV) => {
      return { ...preV, [e.target.id]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      alert("Please fill all inputs before submit.");
      return;
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }

      console.log(result);

      // Save accessToken to localStorage
      localStorage.setItem("accessToken", result.token);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      router.replace("/home");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      console.log("Something went wrong, error to login", error);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="login_wrap">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <Image src={loginImg} alt="Login" />
              </div>

              <div className="login__form">
                <div className="user">
                  <Image src={userIcon} width={100} alt="User" />
                </div>
                <h2>Login</h2>

                <Form>
                  <FormGroup>
                    <input
                      type="email"
                      onChange={handleChange}
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      onChange={handleChange}
                      placeholder="Password"
                      id="password"
                      required
                    />
                  </FormGroup>

                  <Button
                    onClick={handleClick}
                    className="btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href={"/register"}>Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
