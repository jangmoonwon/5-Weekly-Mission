import { LoginLayout } from "@/components/layout/page-layout/auth-layout/LoginLayout";
import { AuthHeader } from "@/components/auth/ui-auth-header/AuthHeader";
import { AuthHeaderLogo } from "@/components/auth/ui-auth-header-logo/AuthHeaderLogo";
import { AuthHeaderDescAction } from "@/components/auth/ui-auth-header-desc-action/AuthHeaderDescAction";
import { SigninForm } from "@/components/auth/signin-form/SigninForm";
import { SocialBox } from "@/components/auth/ui-auth-social-box/SocialBox";
import { AuthHeaderDescription } from "@/components/auth/ui-auth-header-description/AuthHeaderDescription";
import { AuthHeaderContent } from "@/components/auth/ui-auth-header-content/AuthHeaderContent";

export default function Signin() {
  return (
    <LoginLayout>
      <A.Header>
        <A.HeaderLogo />
        <A.HeaderContent>
          <A.HeaderDescription>회원이 아니신가요?</A.HeaderDescription>
          <A.HeaderDescAction href="/signup">회원 가입하기</A.HeaderDescAction>
        </A.HeaderContent>
      </A.Header>
      <SigninForm />
      <SocialBox text="소셜 로그인" />
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
