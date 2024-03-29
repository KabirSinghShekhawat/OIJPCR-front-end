import slugify from 'slugify'
import CardButton from './CardButton'
import CardCover from './CardCover'
import {textClip} from "../../utils";
import dollar from '../../assets/stockPhotos/r1_c1.jpg'
import {PDFButtonSmall} from "../utils";


const ArticleCard = (props) => {
    const {
        coverPhoto,
        author,
        volume,
        title,
        slug,
        pdf
    } = props

    const {cname, id, path} = props
    const authorText =
        `BY ${textClip(author.toUpperCase(), 25)} ${String.fromCharCode(183)} VOLUME ${volume}`
    const defaultPhoto = coverPhoto ? coverPhoto : dollar

    return (
        <div className={
            `rounded-md overflow-hidden shadow-lg my-4 md:m-4
             md:max-w-md lg:h-auto min-40 ${cname.container}`
        }
        >
            <CardCover coverPhoto={defaultPhoto} authorText={authorText}/>
            <CardContent title={title} slug={slug} id={id} path={path} cname={cname} pdf={pdf}/>
        </div>
    )
}

function CardContent({title, slug, id, path, cname, pdf}) {
    const aboutSlug = textClip(slug, 250)
    const urlSlug = slugify(title)

    return (
        <div className="mx-2 my-4 text-justify border-gray-light">
            <div className="h-10 mx-4 text-lg font-bold text-left text-gray-600 truncate whitespace-nowrap">
                {title}
            </div>
            <p className="px-1 mx-4 mb-8 h-32 font-normal text-gray-700 break-words text-md lg:text-sm md:mb-2">
                {aboutSlug}
            </p>
            <div className="flex flex-wrap content-evenly">
                <CardButton text="Read More" slug={urlSlug} id={id} path={path} cname={cname.button}/>
                <PDFButtonSmall pdfLink={pdf}/>
            </div>
        </div>
    )
}


export default ArticleCard;
