import PropTypes from 'prop-types';
import {ImageGalleryListItem, ImageGalleryListImg} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({item, onClick}) => {
const {webformatURL, tags, lagrImageURL} = item;
return (
<ImageGalleryListItem onClick={() => onClick(lagrImageURL)}>
      <ImageGalleryListImg
      src={webformatURL}
      alt={tags}/>
    </ImageGalleryListItem>
);
};
  
  ImageGalleryItem.protoTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }