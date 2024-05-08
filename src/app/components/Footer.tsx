import Image from "next/image"
import telegram_img from "@/assets/Telegram.svg"
import discord_img from "@/assets/Discord.svg"
import twitter_img from "@/assets/Twitter.svg"
import niftables_img from "@/assets/Niftables.svg"

export default function Footer() {
  return (
    <footer className="px-60 pt-[0.9375rem] pb-[2.1875rem] text-base flex">
      © Creon 2023. All rights reserved.
      <Image
        className="size-[2.125rem] ml-[5.625rem]"
        src={telegram_img}
        alt="telegram"
      />
      <Image
        className="size-[2.125rem] ml-2.5"
        src={discord_img}
        alt="telegram"
      />
      <Image
        className="size-[2.125rem] ml-2.5"
        src={twitter_img}
        alt="telegram"
      />
      <p className="ml-auto flex items-center">
        Powered by
        <Image
          className="h-[1.125rem] w-[6.3125rem] ml-1.5"
          src={niftables_img}
          alt="niftables logo"
        />
      </p>
    </footer>
  )
}
