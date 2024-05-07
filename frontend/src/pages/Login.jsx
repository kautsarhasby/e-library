import InputSystem from "../components/input/Input.jsx";
import { useEffect, useState, useRef } from "react";
import { Form } from "../layouts/Form";
import { login } from "../services/auth.service.js";

export const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const usernameRef = useRef();

  async function onSubmit(e) {
    e.preventDefault();
    const acc = { ...form };
    login(acc, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/";
      } else {
        console.log(res);
      }
    });
  }

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  return (
    <main className="flex h-screen items-center  justify-center bg-black/30">
      <Form title={"Login"} onSubmit={onSubmit}>
        <InputSystem>
          <InputSystem.Input
            placeholder={"Input Username..."}
            type={"text"}
            name={"username"}
            id={"username"}
            value={form.username}
            onChange={onChange}
            ref={usernameRef}
          >
            Username :
          </InputSystem.Input>
        </InputSystem>
        <InputSystem>
          <InputSystem.Input
            placeholder={"Input Password..."}
            type={"password"}
            name={"password"}
            id={"password"}
            value={form.password}
            onChange={onChange}
            password={true}
          >
            Password :
          </InputSystem.Input>
        </InputSystem>
      </Form>
    </main>
  );
};
