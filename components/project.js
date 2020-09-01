import useSWR from 'swr'
import Image from './image'
import StarIcon from './icons/star'

const classNames = require('classnames')

const fetcher = url => fetch(url).then(res => res.json())

export default function Project({ content, dark, reverse }) {
  const { data } = useSWR(
    content.apiUrl,
    fetcher
  )

  return (
    <div className={
      classNames('mb-16 flex flex-col', {
        'md:flex-row': !reverse,
        'md:flex-row-reverse': reverse
      })
     }
    >
      <div className="px-8 flex items-center w-full md:w-1/2">
        <div className={
          classNames({
            "p-2 bg-white rounded shadow-md  border border-gray-200 dark:border-0": content.imageBorder
          })
         }
        >
          <a href={content.url}>
            {dark && (
              <Image
                src={content.imageSrcDark}
                type={content.imageType}
                alt={content.title}
                classes={!content.imageBorder ? "rounded shadow-md" : ""}
              />
            )}
            {!dark && (
              <Image
                src={content.imageSrc}
                type={content.imageType}
                alt={content.title}
                classes={!content.imageBorder ? "rounded shadow-md" : ""}
              />
            )}
          </a>
        </div>
      </div>
      <div className="text-gray-700 dark:text-gray-500 px-8 py-6 md:py-0 flex flex-col justify-center w-full md:w-1/2">
        <h3 className="font-bold text-xl">
          <a href={content.url}>
            {content.title}
          </a>
        </h3>
        <p>
          {content.description}
        </p>
        <p className="mt-4">
          <StarIcon size={16} />
          <span className="inline-block align-middle ml-2">{data && data.stargazers_count}</span>
        </p>
      </div>
    </div>
  )
}