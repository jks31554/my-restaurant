'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Title from 'src/app/components/Common/Title';
import { TitleStyle, container, section, aside } from 'src/app/styles/styled';

type Props = {};

const Main: FC<Props> = () => {
  return (
    <div className='container' style={container}>
      <section style={section}>
        <Title text='나만의 식당 리스트' style={TitleStyle} />
        <article
          style={{
            width: '50vw',
            height: '100vh',
            border: '1px solid red',
          }}
        ></article>
      </section>
    </div>
  );
};

export default Main;
