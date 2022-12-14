import Image from 'next/image';
import React from 'react';

import cclogo from '@/common/assets/cclogo.svg';
import { navItemArr } from '@/common/testData';

import { Button } from '../Button';
import { NavItem } from '../NavItem';

export const Header = () => (
  <div className="container my-3 mx-auto flex max-w-7xl justify-between" data-testid="header">
    <section className="relative h-32 w-2/12">
      <Image src={cclogo} alt="CodersCrew logo" layout="fill" objectFit="contain" />
    </section>
    <section className="flex items-center gap-10">
      {navItemArr.map(({ label, path }) => (
        <NavItem label={label} path={path} key={label} />
      ))}
      <Button label="Współpraca" variant="secondary" onClick={() => {}} type="button" />
      <Button label="Dołącz do nas" variant="primary" onClick={() => {}} type="button" />
    </section>
  </div>
);
