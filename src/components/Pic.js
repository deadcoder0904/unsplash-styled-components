import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  width: 37rem;
  height: 48rem;
  margin: 0.5rem;
  transition: all 200ms ease;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
    transform: scale(1.005);
  }
`

export const Pic = ({ src, i }) => {
  const alt = `Unsplash Redesign #${i}`
  return (
    <ImageWrapper>
      <ImageZoom
        image={{
          src,
          alt,
          style: {
            width: '37rem',
            height: '48rem',
          },
        }}
        zoomImage={{ src, alt }}
      />
    </ImageWrapper>
  )
}
