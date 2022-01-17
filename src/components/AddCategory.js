import {useState} from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories})=>{

  const [inputValue, SetInputValue] = useState("");


  const hadleInputChange = (e)=>{

    SetInputValue(e.target.value);
  }

  const handleSubmit = (e)=>{
      e.preventDefault();

      if (inputValue.trim().length >2) {
          setCategories(cats => [ inputValue, ...cats]);
          SetInputValue("");
      }


  }
    return (
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={inputValue}
          onChange={ hadleInputChange }
      />

      </form>
    );

}

AddCategory.propTypes={

    setCategories :  PropTypes.func.isRequired

}