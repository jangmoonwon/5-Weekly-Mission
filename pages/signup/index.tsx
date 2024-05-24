import { LoginLayout } from "@/components/layout/page-layout/auth-layout/LoginLayout";
import { AuthHeader } from "@/components/auth/ui-auth-header/AuthHeader";
import { SignupForm } from "@/components/auth/signup-form/SignupForm";
import { SocialBox } from "@/components/auth/ui-auth-social-box/SocialBox";

export default function Signup() {
  return (
    <LoginLayout>
      <AuthHeader
        href="/signin"
        message="이미 회원이신가요?"
        linkName="로그인 하기"
      />
      <SignupForm />
      <SocialBox text="다른 방식으로 가입하기" />
    </LoginLayout>
  );
}
