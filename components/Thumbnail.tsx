import { cn, getFileIcon } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type ThumbnailProps = {
  type: string
  extension: string
  url?: string
  imageClassName?: string
  className?: string
}

const Thumbnail = ({ type, extension, url='', imageClassName, className }: ThumbnailProps) => {
  const isImage = type === 'image' && extension !== 'svg'

  return (
    <figure className={cn('thumbnail', className)}>
      <Image
        src={isImage ? url : getFileIcon(extension, type)}
        alt="thumbnail image"
        width={100}
        height={100}
        className={cn('size-8 object-contain', imageClassName, isImage && 'thumbnail-image')}
      />
    </figure>
  )
}

export default Thumbnail