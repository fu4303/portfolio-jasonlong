export default function Hero() {
  return (
    <div className="mb-6 md:mb-8">
      <picture>
        <source srcSet={require('../public/images/profile.jpg?webp?size=192')} type="image/webp"/>
        <source srcSet={require('../public/images/profile.jpg?size=192')} type="image/jpeg"/>
        <img src={require('../public/images/profile.jpg?size=192')} className="rounded-full w-16 md:w-24 mb-4" />
      </picture>

      <h1 className="font-black tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight dark:text-gray-100">
        Hi. I'm Jason.
      </h1>
      <h2 className="sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400">
        de·sign·erd <span className="text-gray-600 dark:text-gray-500">| \ di-ˈzī-nərd \</span>
      </h2>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-500">
        <span className="italic block">noun</span>
        <span className="ml-4 block">a person who enjoys creating things both visually and with code.</span>
      </p>
    </div>
  )
}
