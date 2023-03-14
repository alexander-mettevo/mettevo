import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import CheckboxGroup from "@/components/reusable/forms/CheckboxGroup";
import RadioGroup from "@/components/reusable/forms/RadioGroup";
import OutputErrors from "@/components/reusable/forms/OutputErrors";

const schema = yup.object().shape({
  name: yup.string().required(),
  company: yup.string(),
  discuss: yup.array(),
  email: yup.string().email().required(),
});

const discuss = [
  {
    id: 'checkbox-seo',
    title: 'SEO'
  },
  {
    id: 'checkbox-smm',
    title: 'SMM'
  },
  {
    id: 'checkbox-dev',
    title: 'Web development'

  },
  {
    id: 'checkbox-design',
    title: 'Web design'

  },
  {
    id: 'checkbox-main',
    title: 'Website maintenance'

  },
  {
    id: 'checkbox-opt',
    title: 'Website speed optimization'
  }
]
const budget = [
  {
    id: 'checkbox-min',
    title: '<$5k'
  },
  {
    id: 'checkbox-mid',
    title: '$5k-10k'
  },
  {
    id: 'checkbox-max',
    title: '$10k+'
  }
]

const FormComponent = () => {
  const {register, handleSubmit, formState: {errors}, control} = useForm({
    defaultValues: {
      name: '',
      company: '',
      discuss: [],
      budget: ''
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
// Code for send data to server
    console.log('onSubmit', data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'footer-form__content'}>
      <OutputErrors errorObj={errors}/>
      <div className={'footer-form__block'}>
        Hello, Mettevo!
      </div>
      <div>
        <label className='footer-form__label input__label'>My name is <input className={'footer-form__input input'}
                                                                             type='text'
                                                                             {...register("name")}
                                                                             placeholder='YOUR NAME'/></label>
        <label className='footer-form__label input__label'>from <input className={'footer-form__input input'}
                                                                       type='text'
                                                                       {...register("company")}
                                                                       placeholder='WEBSITE OR COMPANY NAME'/></label>
      </div>
      <div>
        <span className='footer-form__checkbox-span'>I’d like to discuss </span>
        <CheckboxGroup options={discuss} control={control} name="discuss"/>
      </div>
      <div>
        <span className='footer-form__checkbox-span'>A budget for this project is</span>
        <RadioGroup name={'budget'} control={control} options={budget}/>
      </div>
      <div>
        <label className='footer-form__label input__label'>Contact me back at
          <input
            className={'footer-form__input input'}
            type='email'
            {...register("email")}
            placeholder='YOUR EMAIL'/></label>
      </div>

      <button className={'button'} type={"submit"}>Process my request</button>
    </form>
  );
};

export default FormComponent;