import styled from "styled-components";
import {MutableRefObject} from "react";

export const GallerySection = styled.section`
  background-color: #FDF0E9;
`
export const GalleryInner = styled.ul`
  padding: 80px 0;
  flex-direction: column;
  display: flex;
  align-items: center;

`
export const GalleryList = styled.ul`
  width: 100%;
  background-color: #FDF0E9;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 29px;
  padding: 80px 0;
`

// GalleryItemCard

interface GalleryItemCardProps {
    active: boolean;
}

export const GalleryItemCard = styled.li<GalleryItemCardProps>`
  cursor: pointer;
  padding: 56px 48px;
  position: relative;
  list-style-type: none;
  height: 417px;
  overflow: hidden;
  border-radius: 5px;
  outline: ${props => props.active ? "7px solid #16cd53" : 'none'};
  background: #000;
  @media (max-width: 1040px) {
    outline: none;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    opacity: 0.8;
  }
`

export const GalleryItemCardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
`
export const GalleryItemCategory = styled.div`
  background-color: #fff;
  padding: 12px 20px;
  color: #9F8D83;
  border-radius: 25px;

`

export const GalleryItemTitle = styled.p`
  width: 100%;
  font-size: 40px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

`