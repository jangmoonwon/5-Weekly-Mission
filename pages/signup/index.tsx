import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.scss";
import classNames from "classnames/bind";
import { LoginLayout } from "@/components/layout/LoginLayout/LoginLayout";
import Logo from "@/public/logo.svg";
import Eyeoff from "@/public/Eyeoff.svg";
import Eyeon from "@/public/Eyeon.svg";
import Googlelogin from "@/public/Googlelogin.svg";
import Kakaologin from "@/public/Kakaologin.svg";
import { MouseEvent, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

type FormFields = z.infer<typeof schema>;

const pwdValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: "이메일을 입력해 주세요." })
      .email({ message: "올바른 이메일 주소가 아닙니다." }),
    password: z
      .string()
      .min(1, { message: "비밀번호를 입력해 주세요." })
      .max(16, { message: "최대 16자리입니다." })
      .regex(pwdValidation, {
        message: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
      }),
    passwordCheck: z
      .string()
      .min(1, { message: "비밀번호를 입력해 주세요." })
      .max(16, { message: "최대 16자리입니다." })
      .regex(pwdValidation, {
        message: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
      }),
  })
  .refine((data) => data.email !== "test@codeit.com", {
    message: "이미 사용 중인 이메일입니다.",
    path: ["email"],
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않아요.",
    path: ["passwordCheck"],
  });

export default function Signup() {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [isShowPwdCheck, setIsShowPwdCheck] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleToggleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsShowPwd(!isShowPwd);
  };

  const handleToggleCheckClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsShowPwdCheck(!isShowPwdCheck);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      router.push("/folder");
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await axiosInstance.post("check-email", data);
      const newRes = res.data;
      const accessToken = newRes.data.accessToken;

      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (error) {
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
      setError("passwordCheck", { message: "비밀번호를 다시 확인해 주세요." });
    }
  };

  const showIcon = <Image src={Eyeon} alt="eye-on" width={16} height={16} />;
  const hideIcon = <Image src={Eyeoff} alt="eye-off" width={16} height={16} />;

  const loginHeader = (
    <header className={cx("header-container")}>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={210} height={38} priority />
      </Link>
      <div className={cx("header-content")}>
        <span className={cx("header-message")}>이미 회원이신가요?</span>
        <Link href="/signin" className={cx("header-link")}>
          로그인 하기
        </Link>
      </div>
    </header>
  );

  const loginForm = (
    <form className={cx("container")} onSubmit={handleSubmit(onSubmit)}>
      <label className={cx("label")}>이메일</label>
      <div className={cx("input-box", { ["error-input-box"]: errors.email })}>
        <input
          className={cx("input")}
          {...register("email")}
          id="email"
          type="text"
          placeholder="이메일을 입력해 주세요."
          autoComplete="off"
        />
      </div>
      {errors.email && (
        <div className={cx("error-message")}>{errors.email.message}</div>
      )}
      <label className={cx("label")}>비밀번호</label>
      <div
        className={cx("input-box", { ["error-input-box"]: errors.password })}
      >
        <input
          className={cx("input")}
          {...register("password")}
          id="password"
          type={isShowPwd ? "text" : "password"}
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
        />
        <button className={cx("eye-icon")} onClick={handleToggleClick}>
          {isShowPwd ? showIcon : hideIcon}
        </button>
      </div>
      {errors.password && (
        <div className={cx("error-message")}>{errors.password.message}</div>
      )}
      <label className={cx("label")}>비밀번호 확인</label>
      <div
        className={cx("input-box", {
          ["error-input-box"]: errors.passwordCheck,
        })}
      >
        <input
          className={cx("input")}
          {...register("passwordCheck")}
          id="passwordCheck"
          type={isShowPwdCheck ? "text" : "password"}
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className={cx("eye-icon")} onClick={handleToggleCheckClick}>
          {isShowPwdCheck ? showIcon : hideIcon}
        </button>
      </div>
      {errors.passwordCheck && (
        <div className={cx("error-message")}>
          {errors.passwordCheck.message}
        </div>
      )}
      <button className={cx("button")} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loaing.." : "로그인"}
      </button>
    </form>
  );

  const loginSocial = (
    <div className={cx("social-login-container")}>
      <span className={cx("social-login-text")}>다른 방식으로 가입하기</span>
      <div className={cx("social-login-icon")}>
        <Link href="https://www.google.com">
          <Image src={Googlelogin} width={42} height={42} alt="google" />
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <Image src={Kakaologin} width={42} height={42} alt="kakao" />
        </Link>
      </div>
    </div>
  );

  return (
    <LoginLayout>
      {loginHeader}
      {loginForm}
      {loginSocial}
    </LoginLayout>
  );
}
