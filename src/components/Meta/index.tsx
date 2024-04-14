import Head from "next/head";

interface IMetaProps {
  title: string;
  ogTitle?: string;
}

function Meta({ title, ogTitle }: IMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="백엔드 엔지니어 이성주의 기술 블로그"
      />
      <meta name="author" content="SeongjuLee" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || "Seongju's blog"} />
      <meta
        property="og:description"
        content="백엔드 엔지니어 이성주의 기술 블로그"
      />
      <meta property="og:url" content="https://seongju.site" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        name="naver-site-verification"
        content="5edb73cb4c7b32558c930626848c6ca1d41410c6"
      />
    </Head>
  );
}

export default Meta;
