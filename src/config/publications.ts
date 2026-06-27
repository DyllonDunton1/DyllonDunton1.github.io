export interface PublicationLink {
  label: string
  href?: string
  active: boolean
  title?: string
}

export const CURRENT_PUBLICATIONS: PublicationLink[] = [
  {
    label: 'Springer: Reduced-Order Modeling',
    href: 'https://link.springer.com/article/10.1007/s00158-026-04368-w',
    active: true,
  },
  {
    label: 'Thesis Pending Digital Commons',
    active: false,
    title: 'Fully accepted by the University of Maine; awaiting Digital Commons publication',
  },
]
