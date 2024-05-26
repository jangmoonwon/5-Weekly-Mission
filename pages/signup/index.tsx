import { LoginLayout } from "@/components/layout/page-layout/auth-layout/LoginLayout";
import { AuthHeader } from "@/components/auth/ui-auth-header/AuthHeader";
import { AuthHeaderLogo } from "@/components/auth/ui-auth-header-logo/AuthHeaderLogo";
import { AuthHeaderDescAction } from "@/components/auth/ui-auth-header-desc-action/AuthHeaderDescAction";
import { SignupForm } from "@/components/auth/signup-form/SignupForm";
import { SocialBox } from "@/components/auth/ui-auth-social-box/SocialBox";
import { AuthHeaderDescription } from "@/components/auth/ui-auth-header-description/AuthHeaderDescription";
import { AuthHeaderContent } from "@/components/auth/ui-auth-header-content/AuthHeaderContent";

export default function Signup() {
  return (
    <LoginLayout>
      <A.Header>
        <A.HeaderLogo />
        <A.HeaderContent>
          <A.HeaderDescription>이미 회원이신가요?</A.HeaderDescription>
          <A.HeaderDescAction href="/signin">로그인 하기</A.HeaderDescAction>
        </A.HeaderContent>
      </A.Header>
      <SignupForm />
      <SocialBox text="다른 방식으로 가입하기" />
    </LoginLayout>
  );
}

export const A = {
  Header: AuthHeader,
  HeaderLogo: AuthHeaderLogo,
  HeaderContent: AuthHeaderContent,
  HeaderDescription: AuthHeaderDescription,
  HeaderDescAction: AuthHeaderDescAction,
};
