'use client';
import { FC, useState, useRef, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import Title from 'src/app/components/Common/Title';
import Input from 'src/app/components/Common/Input';
import Button from 'src/app/components/Common/Button';
import Image from 'next/image';
import {
  TitleStyle,
  ButtonStyle,
  InputStyle,
  container,
  section,
  aside,
} from 'src/app/styles/styled';
import { AuthWarning } from 'src/app/components/Common/AuthWarning';

type Props = {};

const Home: FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const InputRef = useRef<HTMLInputElement>(null);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setIsUsernameValid(true);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsPasswordValid(true);
  };
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (event.currentTarget === usernameInputRef.current) {
        InputRef.current?.focus();
      } else if (event.currentTarget === InputRef.current) {
        handleLogin();
      }
    }
  };

  const handleLogin = () => {
    if (username.length < 6) {
      setIsUsernameValid(false);
    }
    if (password.length < 7) {
      setIsPasswordValid(false);
    }
    if (username.length >= 6 && password.length >= 7) {
      alert('존재하지 않는 아이디입니다 회원가입을 진행해 주세요.');
    }
  };
  const router = useRouter();

  const onClickMove = () => {
    router.push('/sign-in');
  };

  return (
    <div style={container}>
      <aside style={aside}>
        <div
          style={{
            backgroundImage: 'url(/img/mainImage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
          }}
        />
      </aside>
      <section style={section}>
        <Title text='나만의 식당' style={TitleStyle} />
        {/* <Title text='회원가입' style={TitleStyle} /> */}
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
          ref={InputRef}
        />
        {!isPasswordValid && (
          <AuthWarning
            text='비밀번호를 7자리 이상 입력해주세요.'
            isValid={false}
          />
        )}
        <Button text='로그인' onClick={handleLogin} style={ButtonStyle} />
        <Button text='회원가입' onClick={onClickMove} style={ButtonStyle} />
      </section>
    </div>
  );
};

export default Home;
