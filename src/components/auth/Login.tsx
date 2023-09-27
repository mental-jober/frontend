"use client";
import { loginApi } from "@/lib/api/api";
import { useUserStore } from "@/lib/store/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser); // 변경: Zustand store 사용
  const setToken = useUserStore((state) => state.setToken); // 변경: Zustand store 사용
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginApi(email, password);

      if (response && response.status === 200) {
        console.log("[로그인성공] : ", response);
        console.log("response.headers: ", response.headers);
        if (response.headers && response.headers["authorization"]) {
          // 추가: headers 확인
          const token = response.headers["authorization"].split(" ")[1];
          console.log("[로그인token] : ", token);

          setUser({
            id: response.data.data.id,
            email: response.data.data.email,
            username: response.data.data.username,
          });
          setToken(token);
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
    <div className="box-border flex flex-col -mt-[58px] items-center h-screen ">
      <div className="relative w-[143px] h-[143px] my-5 object-cover overflow-hidden">
        <Image src="/logo_jober.png" alt="Logo" fill />
      </div>
      <form onSubmit={handleLogin} className="mt-50">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          className="box-border text2-medium mb-[10px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="box-border text2-medium mb-[40px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />

        <button
          type="submit"
          className="text2-medium w-full h-[52px] px-4   bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          로그인
        </button>
      </form>
      <div className="text2-medium mt-3">
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
