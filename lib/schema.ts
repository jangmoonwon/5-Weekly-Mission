import { z } from "zod";

const PWD_VALIDATION = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function emailSchema() {
  return z
    .string()
    .min(1, { message: "이메일을 입력해 주세요." })
    .email({ message: "올바른 이메일 주소가 아닙니다." });
}

function emailCheckSchema() {
  return z
    .string()
    .min(1, { message: "이메일을 입력해 주세요." })
    .email({ message: "올바른 이메일 주소가 아닙니다." })
    .refine((data) => data !== "test@codeit.com", {
      message: "이미 사용 중인 이메일입니다.",
      path: ["email"],
    });
}

function passwordSchema() {
  return z
    .string()
    .min(1, { message: "비밀번호를 입력해 주세요." })
    .max(16, { message: "최대 16자리입니다." });
}

function passwordCheckSchema() {
  return z
    .string()
    .min(1, { message: "비밀번호를 입력해 주세요." })
    .max(16, { message: "최대 16자리입니다." })
    .regex(PWD_VALIDATION, {
      message: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
    });
}

//signin schema
export type FormFields = z.infer<typeof schema>;

export const schema = z.object({
  email: emailSchema(),
  password: passwordSchema(),
});

//signup schema
export type FormFieldsCheck = z.infer<typeof schemaCheck>;

export const schemaCheck = z
  .object({
    email: emailCheckSchema(),
    password: passwordCheckSchema(),
    passwordCheck: passwordCheckSchema(),
  })
  .refine((data) => data.email !== "test@codeit.com", {
    message: "이미 사용 중인 이메일입니다.",
    path: ["email"],
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않아요.",
    path: ["passwordCheck"],
  });
