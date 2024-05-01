import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/input/Input";
import { Form } from "../layouts/Form";
import { register } from "../services/auth.service";

export const Register = () => {
  const [isCorrect, setIsCorrect] = useState(true);
  const fullnameRef = useRef();

  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const account = { ...form };
    const confirm = document.querySelector("#confirmpassword").value;
    if (confirm != form.password) {
      setIsCorrect(false);
      navigate("/register");
      return;
    } else {
      register(account, (status, res) => {
        if (status) {
          window.location.href = "/login";
        } else {
          console.log(res);
        }
      });
    }
  }

  useEffect(() => {
    fullnameRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      newStatus: false,
    }));
  };

  return (
    <main className="flex h-screen items-center justify-center bg-black/30">
      <Form onSubmit={onSubmit} title={"Register"}>
        <Input
          placeholder={"Input Fullname..."}
          type={"text"}
          name={"fullname"}
          id={"fullname"}
          value={form.fullname}
          onChange={handleInputChange}
          ref={fullnameRef}
        >
          Fullname :
        </Input>
        <Input
          placeholder={"Input Username..."}
          type={"text"}
          name={"username"}
          id={"username"}
          value={form.username}
          onChange={handleInputChange}
        >
          Username :
        </Input>
        <Input
          placeholder={"Input Password..."}
          type={"password"}
          name={"password"}
          id={"password"}
          value={form.password}
          onChange={handleInputChange}
          password={true}
          className="password"
        >
          Password :
        </Input>
        <Input
          placeholder={"Confirm Your Password..."}
          type={"password"}
          name={"confirmpassword"}
          id={"confirmpassword"}
          onChange={handleInputChange}
          password={true}
          className="password"
        >
          Confirm Password :
        </Input>
        <div className={isCorrect ? "hidden" : "block"}>
          <span className="text-red-500">
            Harap masukkan password yang benar
          </span>
        </div>
      </Form>
    </main>
  );
};
