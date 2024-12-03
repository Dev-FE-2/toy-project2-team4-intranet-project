import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { signIn } from '@/apis/firebase/firestore';
import logo from '../../assets/logo.svg';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button/Button';
import LabeledBox from '@/components/ui/Label/LabeledBox';
import * as S from './LoginPage.styles';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || email === '' || password === '') return;

    try {
      setIsLoading(true);
      await signIn(email, password);

      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError('이메일과 비밀번호를 확인해주세요.');

        console.log(error.code);
      }
    } finally {
      setIsLoading(false);
    }

    console.log(email, password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <S.LoginWrapper>
      <S.LoginLogoWrapper>
        <S.LoginLogo src={logo}></S.LoginLogo>
      </S.LoginLogoWrapper>
      <S.LoginForm onSubmit={onSubmitLogin}>
        <S.LoginFormItem>
          <LabeledBox id="email" text="이메일">
            <Input
              onChange={onChange}
              name="email"
              placeholder="이메일을 입력해 주세요"
              value={email}
            />
          </LabeledBox>
        </S.LoginFormItem>
        <S.LoginFormItem>
          <LabeledBox id="password" text="비밀번호">
            <Input
              onChange={onChange}
              name="password"
              placeholder="비밀번호를 입력해 주세요"
              type="password"
              value={password}
            />
          </LabeledBox>
        </S.LoginFormItem>
        {error && <S.LoginFormAlert>{error}</S.LoginFormAlert>}
        <Button disabled={isLoading} $size="lg">
          {isLoading ? '로그인 중..' : '로그인'}
        </Button>
      </S.LoginForm>
    </S.LoginWrapper>
  );
};

export default LoginPage;
