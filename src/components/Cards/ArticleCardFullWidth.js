import { Link } from 'react-router-dom'
import slugify from 'slugify'
import CardCover from './CardCover'
import { textClip } from "../../utils";
import alertCircle from '../../assets/alert-circle.svg'
import dollar from '../../assets/stockPhotos/r1_c1.jpg'

function ArticleCardFullWidth(props) {
  const {
    coverPhoto,
    author,
    volume,
    title,
    slug,
  } = props

  const { cname, id, path } = props
  const authorText =
    `BY ${author.toUpperCase()} ${String.fromCharCode(183)} VOLUME ${volume}`
  const defaultPhoto = coverPhoto ? coverPhoto : dollar
  return (
    <div className={
      `rounded-md overflow-hidden 
       shadow-lg my-4 md:m-4 lg:h-auto 
       md:col-span-full`
    }
    >
      <CardCover
        coverPhoto={defaultPhoto}
        authorText={authorText}
      />
      <CardContent
        title={title}
        slug={slug}
        id={id}
        path={path}
        cname={cname}
      />
    </div>
  )
}

function CardContent({ title, slug, id, path, cname }) {
  const aboutSlug = textClip(slug, 400)
  const urlSlug = slugify(title)

  return (
    <div className="mx-2 my-4 text-justify md:mx-6 border-gray-light">
      <div className="h-10 mb-8 text-2xl font-bold text-left text-gray-600 truncate md:text-4xl whitespace-nowrap text-ellipsis">
        {title}
      </div>
      <p className="px-2 mb-8 text-lg font-normal text-gray-700 break-words lg:mb-12 lg:h-28">
        {aboutSlug}
      </p>
      <div>
        <CardButton text="Read More" slug={urlSlug} id={id} path={path} cname={cname.button} />
      </div>
    </div>
  )
}

function CardButton({ slug, id, path }) {
  const pathUrl = path ? path : '/archive'
  return (
    <>
      <Link
        to={`/archive/${slug}/${id}`}
        className="px-4 py-2 my-4 mr-4 text-white bg-black rounded-lg sm:my-4 max-w-max"
      >
        <img src={alertCircle} className="inline mb-1 mr-2" alt="alert icon" />
        Read More
      </Link>
      {
        path && <Link
          to={`${pathUrl}/${slug}/${id}`}
          className="px-4 py-2 my-4 text-white bg-black rounded-lg sm:my-4 max-w-max"
        >
          <img src={alertCircle} className="inline mb-1 mr-2" alt="alert icon" />
          Edit
        </Link>
      }

    </>
  )
}

export default ArticleCardFullWidth