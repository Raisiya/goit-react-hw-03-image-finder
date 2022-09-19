import { Component } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {SearchBar} from './SearchBar/SearchBar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Modal} from './Modal/Modal';
import {Loader} from './Loader/Loader';
import { Button } from './Button/Button';
import {AppBox} from './App.styled';
import {getApi} from '../api/api';


export class App extends Component  {

  state = {
    showModal: false,
    page: 1,
    per_page: 12,
    query: '',
    items: [],
    isLoading: false,
    activeImg: null,
    lageImageURL: ','
  };

  componentDidMount() {
    this.setState({items: []})
  };

  componentDidUpdate(_, prevState) {
    const {query, page} = this.state;
    if(prevState.page !== page || prevState.query !== query) {
      this.setState({isLoading: true}); 
      if (page === 1) {
        this.setState({items: []});
      };
      this.fetchGalleryItems();
    }
  };

  fetchGalleryItems = () => {
    const {query, page} = this.state;
    getApi(query, page)
    .then(res => {
      this.setState(prevState => ({
        items: [...prevState.items, ...res],
        isLoading: false,
      }));
      if (res.length === 0) {
        return toast.error('Sorry, nothing was found, please try again');
      };
    })
    .catch(error => {
      this.setState({
        status: false,
      });
      toast.error('Sorry there is' + error.message);
      this.setState({isLoading: false});
    });
  };

      loadMore = () => {
        this.setState(prevState => ({
          page: prevState.page + 1,
        }));
      };

  toggleModal = () => {
    this.setState(({showModal}) => ({
        showModal: !showModal
      }))
}; 

handleSubmit = evt => {
  evt.prevenDefault();
  this.setState({
      query: '',
      page: 1,
      isLoading: false,
      items: [],
    });
    evt.target.reset()
  };


setActiveImg = activeImg => {
  this.setState({activeImg});
};

  render () {
    const { isLoading, showModal, items, activeImg} = this.state;
    
    return (
  <AppBox>
    {isLoading && <Loader />}
    <SearchBar onSubmit={this.handleSubmit} loadMore={this.loadMore}/>
    {items.length !== 0 && (
    <ImageGallery 
      items={items}
      toggleModal={this.toggleModal}
      loadMore={this.loadMore}
      setActiveImg={this.setActiveImg}
      />
      )}
    {items.length > 0 && <Button onClick={this.loadMore} loading={this.state.isLoading}/>}
    {showModal && (
    <Modal onClose={this.toggleModal} activeImg={activeImg} 
      />
    )}
    <ToastContainer autoClose={3000} />
  </AppBox>
  );
};
};
