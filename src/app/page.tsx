import React, { Suspense } from 'react';
import { getPostsList } from '@/lib/markdown';
import { Banner } from '@/components/Banner';
import { Category } from '@/components/Category';
import { List } from '@/components/Post/List';
import '../index.css';
import PostItem from '@/components/Post/PostItem';
import VisitorChart from '@/components/VisitorChart';
import { getServiceVistior, getServiePageView } from '@/server/statistic';
import { MAIN_INTRO_TEXT, PROFILE_URL, SOCIAL_ICONS } from '@/const';
import Icon from '@/components/Icon';
import { getRandomNumber } from '@/lib/heler';

export default async function HomePage() {
  const posts = getPostsList({ limit: 5, category: 'all' });
  const visitor = (await getServiceVistior()) as Array<any>;
  const pageViews = (await getServiePageView()) as Array<any>;

  const lastPostLeft = [1, 2, 3, 4];
  const lastPostRight = [1, 2, 3];
  const calculateWidth = 'w-[calc(50%-18px)]';

  const renderIcon = (icon: string, index: number) => {
    const profileUrlKey = Object.entries(SOCIAL_ICONS)[index][0];

    return <Icon name={icon} profileUrl={PROFILE_URL[profileUrlKey]} />;
  };

  return (
    <main className="pt-16 flex flex-col gap-9">
      {/* <Banner />
      <div className="max-w-3xl mx-auto">
        <Category activeCategory="all" />
        <List posts={posts} />
        <div className="pb-6" />
      </div> */}
      <section className="h-[116px] rounded-2xl bg-white main-shadow px-9 flex items-center justify-between">
        <h2 className="m-0 text-3xl font-bold">
          {MAIN_INTRO_TEXT[getRandomNumber(0, MAIN_INTRO_TEXT.length)]}
        </h2>
        <div className="flex item-center space-x-2">
          {Object.values(SOCIAL_ICONS).map((icon, index) =>
            renderIcon(icon, index)
          )}
        </div>
      </section>
      <section className="flex justify-between w-full">
        <div className={`${calculateWidth} flex justify-between`}>
          <div className={`${calculateWidth} flex flex-col gap-y-9`}>
            {lastPostLeft.map((post, index) =>
              index === 0 || index === lastPostLeft.length - 1 ? (
                <PostItem
                  category="프론트엔드"
                  style={{ content: 'w-full h-[195px]' }}
                  key={index}
                />
              ) : (
                <PostItem
                  category="프론트엔드"
                  style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                  image="test"
                  key={index}
                />
              )
            )}
          </div>
          <div className={`${calculateWidth} flex flex-col gap-y-9`}>
            {lastPostRight.map((post, index) => (
              <PostItem
                category="프론트엔드"
                style={{ content: 'w-full h-[195px]', image: 'h-[168px]' }}
                image="test"
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className={`${calculateWidth} h-[582px] rounded-2xl main-shadow sticky top-[50px]`}
        >
          <PostItem
            category="프론트엔드"
            style={{ content: 'w-full h-[228px]', image: 'h-[354px]' }}
            image={'test'}
          />
        </div>
      </section>
      <section className="flex items-center justify-between">
        <div
          className={`rounded-3xl main-shadow h-[360px] bg-concern p-9 ${calculateWidth} flex flex-col gap-9`}
        >
          <span className="text-32 font-bold leading-[56px]">
            1년차 프론트엔드 개발자의
            <br />
            고민거리
          </span>
          <button className="rounded-3xl bg-black py-[9px] pl-[13px] w-[170px] text-white text-13 text-left">
            작성자가 궁금하다면?
          </button>
        </div>
        <div
          className={`rounded-3xl main-shadow h-[360px] p-9 ${calculateWidth} flex flex-col gap-6`}
        >
          <span className="text-32 font-bold leading-[56px]">
            이걸 누가 보러 와?
          </span>
          <VisitorChart
            visitor={visitor.map((visit) => Number(visit[1]))}
            pageViews={pageViews.map((view) => Number(view[1]))}
          />
        </div>
      </section>
    </main>
  );
}
