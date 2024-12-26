import { FormEvent, useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/Button";
import { fetchApi } from "@/utils/fetchApi";
import clsx from "clsx";

export default function Form() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  function formReset(form: HTMLFormElement): void {
    form.reset();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    setIsRegistered(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    try {
      setLoading(true);
      const url = "http://192.168.1.8:5000/api/send_email";

      const response = await fetchApi(url, data);

      if (response.status) {
        setIsRegistered(true);
        formReset(form);
      }

      setTimeout(() => {
        setIsRegistered(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
    <div className="min-h-screen flex justify-center items-center">
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
            required
          />
          <InputField
            type="email"
            label="Email"
            placeholder="Enter your email"
            onChange={() => {}}
            name="email"
            required
          />
          <InputField
            type="number"
            label="Phone"
            placeholder="Enter your number"
            onChange={() => {}}
            name="phone"
            required
          />

          <div className="justify-self-end">
            <Button
              type="submit"
              disabled={isLoading}
              className={clsx(
                isLoading ? "cursor-not-allowed" : "cursor-pointer"
              )}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        {isRegistered && (
          <p className="text-center mt-6 text-green-500">
            Registered Successfully
          </p>
        )}
      </div>
    </div>
     </section>
  );
}
