import React from 'react'
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaTiktok,
} from 'react-icons/fa6'

export interface SocialLogoItem {
  name: string
  icon: React.ReactNode
  href: string
}

export const socialLogos: SocialLogoItem[] = [
  { name: 'Twitter', icon: <FaXTwitter />, href: 'https://x.com/0xfah0' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/0xfah0/' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/fah0-dev' },
  { name: 'discord', icon: <FaDiscord />, href: "https://discord.gg/ten93Fsd4R" },
  { name: 'tiktok', icon: <FaTiktok />, href: "https://www.tiktok.com/@desertwrrior" }

]
