import { useState } from "react";
import { Button } from "../components/button/Button";
import { Input } from "../components/input/Input";

export const AddBooks = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    writer: "",
    year: "",
    language: "",
    image: image,
  });
  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("writer", form.writer);
    formData.append("year", form.year);
    formData.append("language", form.language);
    formData.append("image", image);
    console.log(image);

    let response = await fetch("http://localhost:5050/record", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error status :${response.status}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
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
          <Input
            name={"title"}
            type={"text"}
            onChange={handleInputChange}
            placeholder={"Input Book's Title..."}
          >
            Book&apos;s Title:
          </Input>
          <Input
            name={"writer"}
            type={"text"}
            onChange={handleInputChange}
            placeholder={"Input Book's Writer..."}
          >
            Book&apos;s Writer:
          </Input>
          <Input name={"year"} type={"date"} onChange={handleInputChange}>
            Book&apos;s Year:
          </Input>
          <Input
            name={"language"}
            type={"text"}
            onChange={handleInputChange}
            placeholder={"Input Book's Language"}
          >
            Book&apos;s Language:
          </Input>
          <input
            name={"image"}
            type={"file"}
            onChange={inputImage}
            accept={"image/*"}
          />

          <Button color={"bg-black"} hover={"bg-white"} onClick={formSubmit}>
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
};
