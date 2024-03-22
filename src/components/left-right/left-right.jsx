import Styles from './styles.module.scss';
import Button from '../button/button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '@fortawesome/free-solid-svg-icons';

export default function LeftRight(block) {
  return (
    <div className={[Styles['left-right']]}>
      <div className={Styles['left-right__wrapper']}>
        <img
          className={Styles['left-right__img']}
          src={block.image}
          alt={block.image_alt}
        />
        <div className={Styles['left-right__text']}>
          <h2>
            <FontAwesomeIcon
              className="w-[1.5rem] inline mr-2"
              icon={icons.faUser}
            />
            {block.heading}
          </h2>
          <p>{block.text}</p>
          <Button {...block.button} />
        </div>
      </div>
    </div>
  );
}
