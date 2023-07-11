'use client';
import { FC, useState, useRef, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import Title from 'src/app/components/Common/Title';
import Input from 'src/app/components/Common/Input';
import Button from 'src/app/components/Common/Button';
import { AuthWarning } from 'src/app/components/Common/AuthWarning';
import {
  TitleStyle,
  ButtonStyle,
  InputStyle,
  container,
  section,
  aside,
} from 'src/app/styles/styled';

type Props = {};
const SignIn: FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setIsUsernameValid(true);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsPasswordValid(true);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setIsConfirmPasswordValid(true);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsEmailValid(true);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.currentTarget === usernameInputRef.current) {
        passwordInputRef.current?.focus();
      } else if (event.currentTarget === passwordInputRef.current) {
        confirmPasswordInputRef.current?.focus();
      } else if (event.currentTarget === confirmPasswordInputRef.current) {
        emailInputRef.current?.focus();
      } else if (event.currentTarget === emailInputRef.current) {
        handleSignUp();
      }
    }
  };

  const handleSignUp = () => {
    let isValid = true;

    if (username.length < 6) {
      setIsUsernameValid(false);
      isValid = false;
    }

    if (password.length < 7) {
      setIsPasswordValid(false);
      isValid = false;
    }

    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      isValid = false;
    }

    const emailConfi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailConfi)) {
      setIsEmailValid(false);
      isValid = false;
    }

    if (isValid) {
      alert('회원가입을 축하드립니다.');
      // 회원가입이 성공적으로 이루어지면 다른 페이지로 이동.
      router.push('/sign-in/main');
    }
  };

  return (
    <div style={container}>
      <aside style={aside}>
        <div
          style={{
            backgroundImage: 'url(/img/mainImage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '60vw',
            height: '100vh',
          }}
        />
      </aside>
      <section style={section}>
        <Title text='회원가입' style={TitleStyle} />
        <Input
          label='아이디'
          type='text'
          onChange={handleUsernameChange}
          style={InputStyle}
          onKeyPress={handleKeyPress}
          ref={usernameInputRef}
        />
        {!isUsernameValid && (
          <AuthWarning text='아이디는 6자 이상 입력해주세요.' isValid={false} />
        )}
        <Input
          label='비밀번호'
          type='password'
          onChange={handlePasswordChange}
          style={InputStyle}
          onKeyPress={handleKeyPress}
          ref={passwordInputRef}
        />
        {!isPasswordValid && (
          <AuthWarning
            text='비밀번호를 7자리 이상 입력해주세요.'
            isValid={false}
          />
        )}
        <Input
          label='비밀번호 확인'
          type='password'
          onChange={handleConfirmPasswordChange}
          style={InputStyle}
          onKeyPress={handleKeyPress}
          ref={confirmPasswordInputRef}
        />
        {!isConfirmPasswordValid && (
          <AuthWarning text='비밀번호가 일치하지 않습니다.' isValid={false} />
        )}
        <Input
          label='이메일'
          type='email'
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
          style={InputStyle}
          ref={emailInputRef}
        />
        {!isEmailValid && (
          <AuthWarning text='올바르지 않은 이메일입니다.' isValid={false} />
        )}
        <Button text='가입하기' onClick={handleSignUp} style={ButtonStyle} />
      </section>
    </div>
  );
};
export default SignIn;
