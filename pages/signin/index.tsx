import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Signin.module.scss";
import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormFields } from "@/lib/schema";
import { LoginLayout } from "@/components/layout/login-layout/LoginLayout";
import Eyeoff from "@/public/Eyeoff.svg";
import Eyeon from "@/public/Eyeon.svg";
import SocialBox from "@/components/login-social-box/SocialBox";
import LoginHeader from "@/components/login-header/LoginHeader";
import axiosInstance from "../api/axiosInstance";

const cx = classNames.bind(styles);

export default function Signin() {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const router = useRouter();

  const handleToggleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsShowPwd(!isShowPwd);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await axiosInstance.post("sign-in", data);
      const newRes = res.data;
      const accessToken = newRes.data.accessToken;

      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (error) {
      console.error("error");
      setError("email", { message: "이메일을 확인해 주세요.!" });
      setError("password", { message: "비밀번호를 확인해 주세요.!" });
    }
  };

  const showIcon = <Image src={Eyeon} alt="eye-on" width={16} height={16} />;
  const hideIcon = <Image src={Eyeoff} alt="eye-off" width={16} height={16} />;

  const loginForm = (
    <form className={cx("container")} onSubmit={handleSubmit(onSubmit)}>
      <label className={cx("label")}>이메일</label>
      <div className={cx("input-box", { ["error-input-box"]: errors.email })}>
        <input
          className={cx("input")}
          {...register("email")}
          type="email"
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
          type={isShowPwd ? "text" : "password"}
          placeholder="비밀번호를 입력해 주세요."
        />
        <button
          className={cx("eye-icon")}
          onClick={handleToggleClick}
          type="button"
        >
          {isShowPwd ? showIcon : hideIcon}
        </button>
      </div>
      {errors.password && (
        <div className={cx("error-message")}>{errors.password.message}</div>
      )}
      <button className={cx("button")} type="submit">
        로그인
      </button>
    </form>
  );

  return (
    <LoginLayout>
      <LoginHeader
        href={"/signup"}
        message={"회원이 아니신가요?"}
        linkName={"회원 가입하기"}
      />
      {loginForm}
      <SocialBox text={"소셜 로그인"} />
    </LoginLayout>
  );
}
