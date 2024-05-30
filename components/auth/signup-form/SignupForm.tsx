import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaCheck, FormFieldsCheck } from "@/lib/schema";
import styles from "./SignupForm.module.scss";
import classNames from "classnames/bind";
import Eyeoff from "@/public/eye-off.svg";
import Eyeon from "@/public/eye-on.svg";
import signup from "@/pages/api/signup";

const cx = classNames.bind(styles);

export const SignupForm = () => {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [isShowPwdCheck, setIsShowPwdCheck] = useState(false);
  const router = useRouter();

  const handleToggleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsShowPwd(!isShowPwd);
  };

  const handleToggleCheckClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsShowPwdCheck(!isShowPwdCheck);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFieldsCheck>({
    resolver: zodResolver(schemaCheck),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormFieldsCheck> = async (data) => {
    try {
      const accessToken = await signup(data);
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

  return (
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
        />
        <button
          className={cx("eye-icon")}
          onClick={handleToggleCheckClick}
          type="button"
        >
          {isShowPwdCheck ? showIcon : hideIcon}
        </button>
      </div>
      {errors.passwordCheck && (
        <div className={cx("error-message")}>
          {errors.passwordCheck.message}
        </div>
      )}
      <button className={cx("button")} type="submit">
        회원가입
      </button>
    </form>
  );
};
