import { useState, useEffect, FormEvent } from "react";

import Logo from "../assets/logo.png";
import { createUser, getAllUsernames } from "../api/user";
import Input from "./auth-input";

interface errors {
  username: string;
  password: string;
  passwordConfirmation: string;
  profilePicture: string;
}

const Register: React.FC = () => {
  const noProfilePicture = import.meta.env.VITE_NO_PROFILE_PICTURE;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [profilePicture, setProfilePicture] =
    useState<string>(noProfilePicture);
  const [errors, setErrors] = useState<errors>({
    username: "",
    password: "",
    passwordConfirmation: "",
    profilePicture: "",
  });

  const setErrorsQuick = (field: string, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        if (file.size > 2000000)
          setErrorsQuick(
            "profilePicture",
            "Image size cannot be larger than 2mb",
          );
        else {
          setErrorsQuick("profilePicture", "");
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setProfilePicture(reader.result as string);
          };
        }
      } else {
        setErrorsQuick("profilePicture", "Invalid image file");
      }
    }
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAllUsernames()
      .then((res) => {
        const usernameExists = res.data.find((e) => username === e.username);
        if (usernameExists) {
          setErrorsQuick("username", "Username already exists");
        } else {
          setErrorsQuick("username", "");
          if (password.length < 8)
            setErrorsQuick(
              "password",
              "Password must be at least 8 characters",
            );
          else {
            setErrorsQuick("password", "");
            if (password !== passwordConfirmation)
              setErrorsQuick("passwordConfirmation", "Passwords do not match");
            else {
              setErrorsQuick("passwordConfirmation", "");
              if (errors.profilePicture === "") {
                const user = {
                  username,
                  password,
                  profilePicture,
                };
                createUser(user)
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => console.error(err));
              }
            }
          }
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold">ExpenseEase</h1>
      </div>
      <div className="mt-10 flex h-full w-full max-w-screen-sm flex-col items-center justify-center gap-5 rounded-md border-2 border-neutral-500 bg-slate-200 text-gray-800">
        <p className="text-xl font-light">Hello, register a new account</p>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={handleRegister}
        >
          <Input
            type="text"
            placeholder="Username"
            inputValue={username}
            setInputValue={setUsername}
            error={errors.username}
          />
          <Input
            type="password"
            placeholder="Password"
            inputValue={password}
            setInputValue={setPassword}
            error={errors.password}
          />
          <Input
            type="password"
            placeholder="Password confirmation"
            inputValue={passwordConfirmation}
            setInputValue={setPasswordConfirmation}
            error={errors.passwordConfirmation}
          />
          <div className="flex w-[250px] items-center gap-2">
            <img
              src={profilePicture}
              alt="profile picture"
              className="h-12 w-12 rounded-full"
            />
            <label
              htmlFor="profilePicture"
              className={`flex-1 rounded-md bg-white p-3 drop-shadow-md hover:cursor-pointer hover:bg-slate-50 ${
                errors.profilePicture !== "" && "border-[1px] border-red-400"
              }`}
            >
              Choose image
              <input
                type="file"
                id="profilePicture"
                className="hidden"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </label>
            <button
              type="button"
              className={`rounded-md bg-red-500 p-3 text-center text-white hover:opacity-80 ${
                profilePicture === noProfilePicture && "hidden"
              } `}
              onClick={() => setProfilePicture(noProfilePicture)}
            >
              X
            </button>
          </div>
          <span
            className={`w-[250px] text-left text-sm text-red-400 ${
              errors.profilePicture === "" && "hidden"
            } `}
          >
            {errors.profilePicture}
          </span>
          <button
            type="submit"
            className="w-[250px] rounded-md bg-slate-600 p-3 text-slate-50 hover:bg-slate-500"
          >
            Register
          </button>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-cyan-600 underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
