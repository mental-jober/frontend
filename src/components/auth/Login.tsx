"use client";
import { loginApi } from "@/lib/api/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setAccessTokenToCookie } from "@/lib/cookies";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import { useUserStore } from "@/lib/store/useUserStore";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useUserStore();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginApi(email, password);
      if (response && response.status === 200) {
        console.log("[로그인성공] : ", response);
        console.log("response.headers: ", response.headers);
        const { id, email, username } = response.data.data;
        const userData = { id, email, username };
        setUser(userData);
        if (response.headers && response.headers["authorization"]) {
          console.log(response.headers["authorization"]);
          // 추가: headers 확인
          const token = response.headers["authorization"].split(" ")[1];
          console.log("[로그인token] : ", token);
          setAccessTokenToCookie(token);
        }
        router.replace("/");
      } else {
        // 로그인 실패
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="box-border flex flex-col mx-auto h-screen max-w-[430px] ">
      <div className="relative w-[143px] h-[143px] self-center my-5 object-cover overflow-hidden">
        <Image src="/logo_jober.png" alt="Logo" fill />
      </div>
      <form onSubmit={handleLogin} className="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          className="box-border text2-medium mb-[10px] w-full h-[52px] px-4 focus:outline-none border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <div className="flex justify-between box-border text2-medium mb-[40px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="flex box-border text2-medium h-[52px] focus:outline-none border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
            required
          />
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={togglePasswordVisibility} // 아이콘 클릭시 상태 변경
          >
            {showPassword ? <PiEyeLight /> : <PiEyeClosedLight />}
          </div>
        </div>
        <button
          type="submit"
          className="text2-medium w-full h-[52px] px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          로그인
        </button>
      </form>
      <div className="text2-medium mt-3 self-center">
        로그인 또는
        <Link
          href={"/auth/signup"}
          className="ml-1 underline underline-offset-1"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
