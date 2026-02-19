"use client";

import { Separator } from "@/components/ui/separator"
import LinkItemList from "@/components/linkItemsList";
import { BingImage } from "@/components/bingImage";
import GoogleSearch from "@/components/googleSearch";
import {  SiGmail, SiTaobao } from "react-icons/si";

const googleItems = [
  { title: 'Google', url: 'https://google.com' },
  { title: 'Leetcode', url: 'https://leetcode.cn/problemset/' },
  { title: 'GitHub', url: 'https://github.com/Takusei' },
  { title: 'Notion', url: 'https://www.notion.so/The-Job-Application-Tracker-Interview-Preparation-8f3046d70c87497da3238a3878a427d6' },
  { title: 'ChatGPT', url: 'https://chat.openai.com/' },
]

const socialItems = [
  { title: 'Gmail', url: 'https://gmail.com', icon: <SiGmail /> },
  { title: 'LinkedIn', url: 'https://linkedin.com'},
  { title: 'QQ-Mail', url: 'https://mail.qq.com' },
  { title: 'Map', url: 'https://maps.google.com' },
  { title: 'Suumo', url: 'https://suumo.jp/map/tokyo/sc_shinagawa/'},
]

const comicItems = [
  { title: 'ColaManga', url: 'https://colamanga.com' },
  { title: '漫画柜', url: 'https://www.manhuagui.com/user/book/shelf' },
  { title: 'Jmanga', url: 'https://jmanga.se/home/' },
  { title: 'Zero漫画', url: 'https://zerobyw.github.io/' },
  { title: 'Webtoon', url: 'https://www.webtoons.com' },
  { title: 'Komiic', url: 'https://komiic.com/' },
  { title: 'MangaDex', url: 'https://mangadex.org' },
]

const videoItems = [
  { title: 'Bilibili', url: 'https://bilibili.com'},
  { title: 'YouTube', url: 'https://youtube.com'},
  { title: '风车动漫', url: 'https://www.dmla7.com/type/ribendongman.html'},
  { title: '动漫迷', url: 'https://gimy.tv/'},
  { title: '欧乐影院', url: 'https://www.olevod.com/'},
  { title: '斗鱼', url: 'https://www.douyu.com/directory/myFollow'},
]

const shoppingItems = [
  { title: '亚马逊', url: 'https://www.amazon.co.jp/'},
  { title: 'Mercari', url: 'https://jp.mercari.com/'},
  { title: '乐天市场', url: 'https://rakuten.co.jp' },
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
