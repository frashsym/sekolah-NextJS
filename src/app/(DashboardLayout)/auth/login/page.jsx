"use client";
import { API_Backend } from "../../../api/api.js";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Head from "next/head";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_Backend}/login`, { username, password });

      if (response.status === 200) {
        setCookie("token", response.data.token, { path: "/" });
        router.push("/dashboard");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.msg || "Terjadi kesalahan dengan server");
      } else if (err.request) {
        setError("Tidak ada respons dari server. Periksa koneksi jaringan Anda atau coba lagi nanti.");
      } else {
        setError("Terjadi kesalahan saat mengatur permintaan. Silakan coba lagi.");
      }
    }
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Head>
          <title>Login - Admin System</title>
        </Head>
        <Card className="smooth-shadow-md">
          <Card.Body className="p-6 text-center">
            <div className="mb-4">
              <h1 className="text-center">Admin Login</h1>
              <p className="mb-6">Masuk untuk mengelola sistem</p>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 text-start" controlId="username">
                <Form.Label>Username</Form.Label>
                <div className="input-group">
                  <span className="input-group-text d-flex align-items-center justify-content-center rounded">
                    <MdOutlineAlternateEmail />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Masukan username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="rounded"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text d-flex align-items-center justify-content-center rounded">
                    <FiLock />
                  </span>
                  <Form.Control
                    type="password"
                    placeholder="**************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded"
                  />
                </div>
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
