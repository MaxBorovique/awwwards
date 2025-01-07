const ImageClipBox = ({src, clipClass}) => {
  return ( 
    <div className={clipClass}>
            <img src={src} alt="contact" />
          </div>
   );
}
 
export default ImageClipBox;