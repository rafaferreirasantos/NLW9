import React, { Component } from 'react'

interface GameBannerProps {
  bannerURL: string,
  title: string,
  adsCount: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={props.bannerURL} alt={`Banner ${props.title}`} />
      <div className="w-full pt-16 pb-4 px-4 bg-gamelabel-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}