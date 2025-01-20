"use client";

import { Separator } from "@/components/ui/separator"
import { BookOpenText, Tv, Youtube, ShoppingCart} from "lucide-react"
import LinkItemList from "@/components/linkItemsList";
import { BingImage } from "@/components/bingImage";
import GoogleSearch from "@/components/googleSearch";
import { FcGoogle } from "react-icons/fc";
import { SiGooglemaps, SiLeetcode, SiGmail, SiLinkedin, SiTencentqq, SiAmazon, SiRakuten, SiTaobao, SiBilibili } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const googleItems = [
  { title: 'Google', url: 'https://google.com', icon: <FcGoogle/> },
  { title: 'GoogleMap', url: 'https://maps.google.com', icon: <SiGooglemaps /> },
  { title: 'Leetcode', url: 'https://leetcode.cn/problemset/', icon: <SiLeetcode /> },
  { title: 'GitHub', url: 'https://github.com/Takusei', icon: <FaGithub /> },
]

const socialItems = [
  { title: 'Gmail', url: 'https://gmail.com', icon: <SiGmail /> },
  { title: 'LinkedIn', url: 'https://linkedin.com', icon: <SiLinkedin /> },
  { title: 'QQ-Mail', url: 'https://mail.qq.com', icon: <SiTencentqq /> },
]

const comicItems = [
  { title: 'ColaManga', url: 'https://colamanga.com', icon: <BookOpenText /> },
  { title: '漫画柜', url: 'https://www.manhuagui.com/user/book/shelf', icon: <BookOpenText /> },
  { title: '动漫之家', url: 'https://manhua.idmzj.com/', icon: <BookOpenText /> },
  { title: 'Webtoon', url: 'https://www.webtoons.com', icon: <BookOpenText /> },
  { title: 'Komiic', url: 'https://komiic.com/', icon: <BookOpenText /> },
  { title: 'MangaDex', url: 'https://mangadex.org', icon: <BookOpenText /> },
]

const videoItems = [
  { title: 'Bilibili', url: 'https://bilibili.com', icon: <SiBilibili /> },
  { title: 'YouTube', url: 'https://youtube.com', icon: <Youtube /> },
  { title: '风车动漫', url: 'https://www.dmla7.com/type/ribendongman.html', icon: <Tv /> },
  { title: '动漫迷', url: 'https://gimy.tv/', icon: <Tv /> },
  { title: '欧乐影院', url: 'https://www.olevod.com/', icon: <Tv /> },
  { title: '斗鱼', url: 'https://www.douyu.com/directory/myFollow', icon: <Tv /> },
]

const shoppingItems = [
  { title: '亚马逊', url: 'https://www.amazon.co.jp/', icon: <SiAmazon /> },
  { title: 'Mercari', url: 'https://jp.mercari.com/', icon: <ShoppingCart /> },
  { title: '乐天市场', url: 'https://rakuten.co.jp', icon: <SiRakuten /> },
  { title: '淘宝', url: 'https://taobao.com', icon: <SiTaobao /> },
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BingImage />
        <GoogleSearch />
        <Separator />
        <LinkItemList category={'常用'} items={googleItems} />
        <Separator />
        <LinkItemList category={'社交'} items={socialItems} />
        <Separator />
        <LinkItemList category={'动画'} items={videoItems} />
        <Separator />
        <LinkItemList category={'漫画'} items={comicItems} />
        <Separator />
        <LinkItemList category={'购物'} items={shoppingItems} />
      </main>
    </div>
  );
}
