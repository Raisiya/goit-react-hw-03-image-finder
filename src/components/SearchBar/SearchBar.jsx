import { toast } from 'react-toastify';
import {ImSearch} from "react-icons/im";
import { Formik } from 'formik';
import {SearchBarBox, SearchBarForm, SearchBarBtn, SearchBarLabel, SearchBarInput } from './SearchBar.styled';

export const SearchBar = ({onSubmit}) => {

  const handleSubmit = (values, actions) => {
    if(values.query.trim() === '') {
      return toast.error('Please, enter search query');
    }
    onSubmit(values);
    actions.resetForm();
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
