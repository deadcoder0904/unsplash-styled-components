import React from 'react'
import styled from 'styled-components'
import { categories } from '../utils/categories'

const Categories = styled.div`
  padding-bottom: 2rem;
  padding-left: 2rem;
  position: fixed;
  margin-top: 8.2rem;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  width: 23rem;
  background: ${props => props.theme.bgColor};
  z-index: 2;
`

const CategoryName = styled.a`
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  color: ${props => props.theme.categoryColor};
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;
  padding-bottom: 1.7rem;
  padding-top: 2.1rem;
  text-decoration: none;
  white-space: nowrap;
  :hover {
    color: ${props => props.theme.categoryHoverColor};
    outline: none;
  }
`

const Category = ({ name }) => <CategoryName href="#">{name}</CategoryName>

export const CategoriesList = () => (
  <Categories>
    {categories.map((category, i) => (
      <Category name={category} key={i} i={i} />
    ))}
  </Categories>
)
