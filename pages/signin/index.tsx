import { LoginLayout } from "@/components/layout/page-layout/auth-layout/LoginLayout";
import { AuthHeader } from "@/components/auth/ui-auth-header/AuthHeader";
import { SigninForm } from "@/components/auth/signin-form/SigninForm";
import { SocialBox } from "@/components/auth/ui-auth-social-box/SocialBox";

export default function Signin() {
  return (
    <LoginLayout>
      <AuthHeader
        href="/signup"
        message="회원이 아니신가요?"
        linkName="회원 가입하기"
      />
      <SigninForm />
      <SocialBox text="소셜 로그인" />
    </LoginLayout>
  );
}
