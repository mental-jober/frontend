"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
    // 여기에 백엔드 로그인 API 호출 로직을 추가
    // 예: const response = await loginApi(email, password);
    // if (response.success) router.push('/dashboard');
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
    </div>
  );
};

export default Login;
