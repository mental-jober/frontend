"use client";
import { signupApi } from "@/lib/api/api";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signupApi(email, password, username);

      if (response && response.status === 200) {
        console.log("[회원가입성공] : ", response.data);
        router.replace("/auth/login");
      } else {
        // 회원가입 실패
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="box-border flex flex-col items-center h-screen ">
      <div className="relative w-[143px] h-[143px] my-5 object-cover overflow-hidden">
        <Image src="/logo_jober.png" alt="Logo" fill />
      </div>
      <p className='text-lg title1-bold mb-5'>회원가입</p>
      <form onSubmit={handleSignup} className="mt-50">
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
          className="box-border text2-medium mb-[10px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자명"
          className="box-border text2-medium mb-[40px] w-full h-[52px] px-4  border-none rounded-md placeholder-gray-400 bg-foundation-grey-200"
          required
        />
        <button
          type="submit"
          className="text2-medium w-full h-[52px] px-4   bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          회원가입
        </button>
      </form>
      <div className="text2-medium mt-3">
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
