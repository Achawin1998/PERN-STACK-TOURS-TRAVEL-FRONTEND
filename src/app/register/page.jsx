"use client";
import React, { useState, useContext } from "react";
import "../style/login.css";
import { Container, Row, Col, FormGroup, Button, Form } from "reactstrap";
import Link from "next/link";
import registerImg from "../../../assets/images/register.png";
import userIcon from "../../../assets/images/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

// authentication register
import { AuthContext } from "../Context/AuthContext";
import { BASE_URL } from "../utils/config";

function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
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

    if (!credentials.username || !credentials.email || !credentials.password) {
      alert("Please fill all inputs before submit");
      return;
    } else if (
      credentials.password.length < 6 ||
      credentials.password.trim().length < 6
    ) {
      alert("The number of password must be greater than 6 characters.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }

      dispatch({ type: "REGISTER_SUCCESS" });

      router.replace("/login");
    } catch (error) {
      alert(error.message);
      console.log("Something went wrong , error to register", error);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="login_wrap">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <Image src={registerImg} width={""} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <Image src={userIcon} width={100} alt="" />
                </div>
                <h2>Register</h2>

                <Form>
                  <FormGroup>
                    <input
                      type="text"
                      onChange={handleChange}
                      placeholder="username"
                      id="username"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      onChange={handleChange}
                      placeholder="email"
                      id="email"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      onChange={handleChange}
                      placeholder="password"
                      id="password"
                      required
                    />
                  </FormGroup>

                  <Button
                    onClick={handleClick}
                    className="btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link href={"/login"}>Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
