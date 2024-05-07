import { useEffect, useRef, useState } from "react";
import InputSystem from "../components/input/Input";

export const AddBooks = () => {
  const [image, setImage] = useState(null);
  const booksRef = useRef();
  const [form, setForm] = useState({
    title: "",
    writer: "",
    year: "",
    language: "",
    price: 0,
    rentPrice: 0,
    description: "",
    image: image,
  });
  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("writer", form.writer);
    formData.append("year", form.year);
    formData.append("language", form.language);
    formData.append("price", form.price);
    formData.append("rentPrice", form.rentPrice);
    formData.append("description", form.description);
    formData.append("image", image);
    let response = await fetch("http://localhost:5050/record", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error status :${response.status}`);
    }
    setForm({
      title: "",
      writer: "",
      year: "",
      language: "",
      image: image,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    booksRef.current.focus();
  }, []);

  const inputImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <main className="w-full flex justify-center">
      <section className=" flex justify-center flex-col items-center w-3/4">
        <span className="font-bold text-xl">Add Books</span>
        <hr className="h-1 bg-[#0855b1] w-1/2" />
        <form
          className="p-4 w-3/4 flex flex-col gap-y-2 font-medium"
          encType="multipart/form-data"
        >
          <InputSystem>
            <InputSystem.Input
              name={"title"}
              type={"text"}
              onChange={handleInputChange}
              placeholder={"Input Book's Title..."}
              ref={booksRef}
            >
              Book&apos;s Title:
            </InputSystem.Input>
          </InputSystem>
          <InputSystem>
            <InputSystem.Input
              name={"writer"}
              type={"text"}
              onChange={handleInputChange}
              placeholder={"Input Book's Writer..."}
            >
              Book&apos;s Writer:
            </InputSystem.Input>
          </InputSystem>
          <InputSystem>
            <InputSystem.Input
              name={"year"}
              type={"date"}
              onChange={handleInputChange}
            >
              Book&apos;s Year:
            </InputSystem.Input>
          </InputSystem>
          <InputSystem>
            <InputSystem.Input
              name={"language"}
              type={"text"}
              onChange={handleInputChange}
              placeholder={"Input Book's Language"}
            >
              Book&apos;s Language:
            </InputSystem.Input>
          </InputSystem>
          <InputSystem>
            <InputSystem.Input
              name={"price"}
              type={"number"}
              onChange={handleInputChange}
              placeholder={"Input Book's Price"}
            >
              Book&apos;s Price:
            </InputSystem.Input>
          </InputSystem>
          <InputSystem>
            <InputSystem.Input
              name={"rentPrice"}
              type={"number"}
              onChange={handleInputChange}
              placeholder={"Input Book's Rent Price"}
            >
              Book&apos;s Rent Price:
            </InputSystem.Input>
          </InputSystem>

          <InputSystem.TextArea
            name={"description"}
            onChange={handleInputChange}
          >
            Book&apos;s Description:
          </InputSystem.TextArea>
          <InputSystem>
            <InputSystem.Input
              name={"image"}
              type={"file"}
              onChange={inputImage}
              accept={"image/*"}
            >
              Book&apos;s Cover:
            </InputSystem.Input>
          </InputSystem>
          <button onClick={formSubmit}>Submit</button>
        </form>
      </section>
    </main>
  );
};
