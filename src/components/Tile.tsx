import { useState } from 'react';
import { Link} from 'react-router-dom'
import '../styles/Tile.css'


interface TileProps{
  staticUrl: string,
  gifUrl: string,
  title: string,
  pagePath: string,
  orientation: string,
  featured?: boolean,
}

const Tile = ({staticUrl, gifUrl, title, pagePath, orientation, featured = false}: TileProps) => {

  const [imgSrc, setImgSrc] = useState(staticUrl);
  //const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    //setIsHovered(true);
    setImgSrc(''); // Force reflow
    setTimeout(() => {
      setImgSrc(gifUrl); // Reload the gif
    }, 0.05);
  };

  const handleMouseLeave = () => {
    //setIsHovered(false);
    setImgSrc(staticUrl);
  };

  let class_name_full_img = "tileImg " + orientation;
  let class_name_full_container = "tileImgContainer " + orientation + "Container";
  let class_name_tile = featured ? "tileBase featuredTile" : "tileBase";

  return (
    <Link to={pagePath} 
      className={class_name_tile}
      onMouseEnter={() => handleMouseEnter()}  
      onMouseLeave={() => handleMouseLeave()} 
    >
      <div className={class_name_full_container}>
        <img src={imgSrc} className={class_name_full_img} alt={title}></img>
      </div>
      <div className="tileInfo">
        <h2 className="tileTitle">{title}</h2>
      </div>
    </Link>
  )
}


export default Tile
