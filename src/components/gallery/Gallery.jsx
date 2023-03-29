import { useState } from 'react'
import './gallery.css'


export default function Gallery({pictures, title}){
  const[imageIndex, updateImageIndex] = useState(0)
  const indexOflastPicture = pictures.length - 1
  const isJustOnePicture = indexOflastPicture === 0
  function handleClickLeft(){
    if(imageIndex === 0){      
      updateImageIndex(indexOflastPicture)
    }else{
      updateImageIndex(imageIndex - 1)
    }
  }
  function handleClickRight(){
    if(imageIndex === indexOflastPicture){
      updateImageIndex(0)
    }else{
      updateImageIndex(imageIndex + 1)
    }  
  }
  return <div className='gallery'>
    <i className={`fa-solid fa-chevron-left ${isJustOnePicture? 'hidden' : ''}`} onClick={ handleClickLeft}></i>
    <img src={pictures[imageIndex]} alt={title} className="gallery-cover"/>
    <i className={`fa-solid fa-chevron-right ${isJustOnePicture? 'hidden' : ''}`} onClick={handleClickRight}></i>

  </div>


}