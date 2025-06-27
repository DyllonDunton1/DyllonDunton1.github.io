import { useState } from 'react';
import { Link} from 'react-router-dom'
import '../styles/Tile.css'


interface TileProps{
  staticUrl: string,
  gifUrl: string,
  title: string,
  pagePath: string,
}

const Tile = ({staticUrl, gifUrl, title, pagePath}: TileProps) => {

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

  return (
    <Link to={pagePath} 
      className="tileBase"
      onMouseEnter={() => handleMouseEnter()}  
      onMouseLeave={() => handleMouseLeave()} 
    >
      <div className="tileImgContainer">
        <img src={imgSrc} className="tileImg"></img>
      </div>
      <div className="tileInfo">
        <h2 className="tileTitle">{title}</h2>
      </div>
    </Link>
  )
}



export default Tile
