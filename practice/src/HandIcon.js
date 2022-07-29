import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGE = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
}

function HandIcon({value}) {
  const src = IMAGE[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
