import { ChangeEvent, useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/Button";

export default function Form() {
  const [isLoading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data.name);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-start text-gray-800 mb-6">
          Get in Touch
        </h2>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <InputField
            type="text"
            label="Name"
            placeholder="Enter your name"
            onChange={() => {}}
            name="name"
          />
          <InputField
            type="email"
            label="Email"
            placeholder="Enter your email"
            onChange={() => {}}
            name="email"
          />

          <div className="justify-self-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
