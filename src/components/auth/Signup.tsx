"use client";
import { signupApi } from "@/lib/api/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToastStore } from "@/lib/store/store.module";

const Signup: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const { showToast } = useToastStore();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signupApi(email, password, username);
      console.log("response : ", response);
      if (response.code === 200) {
        console.log("[회원가입성공] : ", response.data);
        alert("회원가입이 성공하였습니다.\n로그인 페이지로 이동합니다."); // <-- 여기 추가!
        router.replace("/auth/login");
        
      } else {
        // 회원가입 실패
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    return regex.test(password);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError("유효한 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError("영문+숫자+특수문자 조합(8~20자)이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameBlur = () => {
    const regex = /^[가-힣a-zA-Z]+$/;

    if (!username) {
      setUsernameError("사용자명은 필수로 입력해야 합니다.");
    } else if (!regex.test(username)) {
      setUsernameError("사용자명은 한글 또는 영어로만 구성되어야 합니다.");
    } else {
      setUsernameError("");
    }
  };

  return (
    <div className="box-border flex flex-col mx-auto h-screen max-w-[430px] ">
      <div className="relative w-[143px] h-[143px] my-5 object-cover overflow-hidden self-center">
        <Image src="/logo_jober.png" alt="Logo" fill />
      </div>
      <p className="text-lg title1-bold mb-5 self-center">회원가입</p>
      <form onSubmit={handleSignup} className="mt-50">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          placeholder="이메일"
          className="box-border text2-medium mb-[1px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <div className="h-5 text-xs mb-2">
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          placeholder="비밀번호"
          className="box-border text2-medium mb-[1px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <div className="h-5 text-xs mb-2">
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleUsernameBlur}
          placeholder="사용자명"
          className="box-border text2-medium mb-[1px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <div className="h-5 text-xs mb-5">
          {usernameError && <p className="text-red-500">{usernameError}</p>}
        </div>

        <button
          type="submit"
          className="text2-medium w-full h-[52px] px-4   bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          회원가입
        </button>
      </form>
      <div className="text2-medium mt-3  self-center">
        회원가입 또는
        <Link
          href={"/auth/login"}
          className="ml-1 underline underline-offset-1"
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Signup;
