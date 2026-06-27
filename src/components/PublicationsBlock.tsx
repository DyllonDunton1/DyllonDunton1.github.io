import { CURRENT_PUBLICATIONS } from '../config/publications'
import '../styles/PublicationsBlock.css'

const PublicationsBlock = () => {
  if (CURRENT_PUBLICATIONS.length === 0) return null

  return (
    <div className='publicationsBlock'>
      <p className='currentFocusLabel'>Current Publications</p>
      <div className='publicationButtonGroup'>
        {CURRENT_PUBLICATIONS.map((publication) => {
          if (publication.active && publication.href) {
            return (
              <a
                key={publication.label}
                className='publicationButton'
                href={publication.href}
                target='_blank'
                rel='noreferrer'
                title={publication.title}
              >
                {publication.label}
              </a>
            )
          }

          return (
            <span
              key={publication.label}
              className='publicationButton publicationButtonDisabled'
              title={publication.title}
              aria-disabled='true'
            >
              {publication.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default PublicationsBlock
