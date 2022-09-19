import {ImageGalleryListItem, ImageGalleryListImg} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({item, onClick}) => (
    <ImageGalleryListItem onClick={onClick}>
      <ImageGalleryListImg
      src={item.webformatURL}
      alt={item.tags}/>
    </ImageGalleryListItem>
  );
