import logo from '../../assets/brandIcons/logo.svg'
import { urlLinks as NavLinks } from '../Navigation/Nav'
import {PodcastLinks} from './PodcastLinks'
import { SocialLinks } from './SocialLinks'
import { FooterContainer, FooterNavContainer } from './FooterContainers'
import FooterLinks from './FooterLinks'


export default function Footer () {
  return (
    <FooterContainer>
      <CopyrightLeftPanel logo={logo}/>
      <FooterNavContainer>
        <FooterLinks links={NavLinks} heading={'Navigate'}/>
        <FooterLinks links={PodcastLinks} heading={'Podcast'} newTab={true} />
        <FooterLinks links={SocialLinks} heading={'Social Media'} newTab={true} />
      </FooterNavContainer>
    </FooterContainer>
  )
}

function CopyrightLeftPanel ({ logo }) {
  return (
    <div className="py-2 pr-2 pl-4 flex-1 w-full md:w-1/2 md:p-2">
      <img src={logo} alt="OIJPCR logo" className="w-14 h-14 md:w-20 md:h-20"/>
      <p className="mt-2 md:mt-6">&copy; Copyright 2016-2021</p>
      <p>Online Indian Journal of Peace and Conflict Resolution</p>
    </div>
  )
}
