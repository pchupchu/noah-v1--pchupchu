import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ValidationError, useForm } from '@formspree/react';
import { FaCheckCircle } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import AnimatedText from './AnimatedText';

const Contact = () => {
  const [state, handleSubmit] = useForm('mnnqkjod');

  //state for form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  //state to control icon visibility and button text
  const [iconVisible, setIconVisible] = useState(false);

  //handle form input changes
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //clear the form after submission and handle message icon visibility

  useEffect(() => {
    if (state.succeeded) {
      setIconVisible(true); //show the success icon
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      }); //clear the form

      // hide the success icon and revert button text after 3 seconds
      const timeout = setTimeout(() => {
        setIconVisible(false);
      }, 3000);

      //clean up the timeout when the component unmounts or before re-running the effect
      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  //handle form submission
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formData); //call the handleSubmit function from formspree's useForm hook
  };

  return (
    <section className='pb-32 pt-9 xl:pt-12' id='contact'>
      <div className='container'>
        <div className='flex flex-col items-center gap-16 xl:flex-row'>
          <div className='mx-auto flex flex-1 flex-col xl:mx-0'>
            <AnimatedText
              text={`Let's work together`}
              textStyles='capitalize h2 text-center mb-12 xl:text-left'
            />
            <form
              className='flex w-full max-w-[480px] flex-col gap-6'
              onSubmit={handleSubmitForm}>
              <div className='flex gap-8'>
                <div className='flex-1'>
                  <label
                    className='mb-2 block text-sm font-medium text-primary'
                    htmlFor='firstname'>
                    Firstname <span className='text-accent'>*</span>
                  </label>
                  <input
                    className='input'
                    type='text'
                    id='firstname'
                    name='firstname'
                    placeholder='First Name'
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label
                    className='mb-2 block text-sm font-medium text-primary'
                    htmlFor='lastname'>
                    Firstname <span className='text-accent'>*</span>
                  </label>
                  <input
                    className='input'
                    type='text'
                    id='lastname'
                    name='lastname'
                    placeholder='Last Name'
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className='mb-2 block text-sm font-medium text-primary'
                  htmlFor='email'>
                  Email <span className='text-accent'>*</span>
                </label>
                <input
                  className='input'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='youremail@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  className='mb-2 block text-sm font-medium text-primary'
                  htmlFor='phone'>
                  Phone number
                </label>
                <input
                  className='input'
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='+1 (555) 555-5555'
                  value={formData.phone}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix='Phone'
                  field='phone'
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  className='mb-2 block text-sm font-medium text-primary'
                  htmlFor='email'>
                  Message <span className='text-accent'>*</span>
                </label>
                <textarea
                  className='textarea'
                  id='message'
                  name='message'
                  placeholder='Leave me a message...'
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              <button
                className='btn btn-accent flex items-center justify-center gap-2'
                type='submit'
                disabled={state.submitting}>
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={cn(
                        'absolute text-lg text-white opacity-0 transition-opacity duration-500 ease-in-out',
                        iconVisible && 'opacity-100'
                      )}
                    />
                    <span
                      className={cn(
                        'opacity-100 transition-opacity duration-500 ease-in-out',
                        iconVisible && 'opacity-0'
                      )}>
                      Send message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className='relative hidden h-[664px] w-[577px] overflow-hidden rounded-lg xl:flex'>
            <Image
              className='object-cover'
              src='/contact/img.png'
              alt='Contact'
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
