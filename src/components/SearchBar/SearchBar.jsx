import { toast } from 'react-toastify';
import {ImSearch} from "react-icons/im";
import { Formik } from 'formik';
import {SearchBarBox, SearchBarForm, SearchBarBtn, SearchBarLabel, SearchBarInput } from './SearchBar.styled';

export const SearchBar = ({onSubmit}) => {

  const handleSubmit = evt => {
    evt.preventDefault();
    if(!evt.target.value.trim() === '') {
      return toast.error('Please, enter search query');
    }
  
    evt.target.reset();
  };

  return (
    <SearchBarBox>
      <Formik initialValues={{query: ''}} onSubmit={handleSubmit}>
        <SearchBarForm>
        <SearchBarInput
      type="text"
      autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
        />
        <SearchBarBtn type="submit">
          <SearchBarLabel />
            <ImSearch />
        </SearchBarBtn>
        </SearchBarForm>
      </Formik>
        </SearchBarBox>
        );
      };
