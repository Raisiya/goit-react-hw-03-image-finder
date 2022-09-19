import {ImageGalleryList} from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = ({items, toggleModal, setActiveImg, loadMore}) => {
  return (
    <>
      <ImageGalleryList> 
      {items.map(item => {
        return (
        <ImageGalleryItem
        item={item}
        key={item.id}
        onClick={() => {
          toggleModal();
          setActiveImg(item.largeImageURL);
        }}
        />
        )
      })}
    </ImageGalleryList>
    <Button onClick={loadMore}>Load more</Button>
    </>
  );
};

