import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  margin: 0.5rem;
  transition: all 200ms ease;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
    transform: scale(1.005);
  }
`

export const Pic = ({ src, i }) => {
  const alt = `Unsplash Redesign #${i}`
  const imageProps = { src, alt }
  return (
    <ImageWrapper>
      <ImageZoom
        image={imageProps}
        zoomImage={imageProps}
        defaultStyles={{
          image: { width: '37rem', height: '48rem' },
        }}
      />
    </ImageWrapper>
  )
}
