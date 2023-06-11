import { CategoryType } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface CategoryProps {
  activeCategory: CategoryType;
}

const Category = ({ activeCategory }: CategoryProps) => {
  const utilClass = (category: CategoryType) => {
    return classNames('cursor-pointer', {
      'text-main': activeCategory === category,
    });
  };

  return (
    <div className="p-4 flex gap-4 border-solid border-b-[1px] border-gray-700 mb-4 text-neutral-400">
      <Link href={'/'}>
        <span className={utilClass('all')}>전체</span>
      </Link>
      <Link href={'/post/develop'}>
        <span className={utilClass('develop')}>개발</span>
      </Link>
      <Link href={'/post/design'}>
        <span className={utilClass('design')}>디자인</span>
      </Link>
    </div>
  );
};

export { Category };
