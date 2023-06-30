import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddBooks.css';
import { apiDomain } from '../../../utils/utils';
import { Context } from '../../../context/userContext/context';
import { useContext } from 'react';

const AddBookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useContext(Context);

  const onSubmit =(data) => {
    try {
      axios.post(`${apiDomain}/books`, data , { headers: { Authorization: `${user.token}` } } );
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-book-form">
      <h2>Add Book</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input {...register('title', { required: true })} />
        {errors.title && <span className="error-message">Title is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="pdfUrl">PDF URL:</label>
        <input {...register('pdfUrl', { required: true })} />
        {errors.pdfUrl && <span className="error-message">PDF URL is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="authorName">Author Name:</label>
        <input {...register('authorName', { required: true })} />
        {errors.authorName && <span className="error-message">Author Name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="categoryName">Category Name:</label>
        <input {...register('categoryName', { required: true })} />
        {errors.categoryName && <span className="error-message">Category Name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input {...register('price', { required: true, pattern: /^\d+(\.\d{1,2})?$/ })} />
        {errors.price && <span className="error-message">Price is required and must be a valid number</span>}
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input {...register('image', { required: true })} />
        {errors.image && <span className="error-message">Image URL is required</span>}
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
