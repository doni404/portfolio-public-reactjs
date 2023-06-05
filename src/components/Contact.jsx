import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("Message submited: " + JSON.stringify(data));

    const contactData = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    
    axios.post(process.env.REACT_APP_BASE_URL_API + "v1/public/contacts", contactData).then((response) => {
      // Show success alert and reset the form
      console.log(response.status);
      toast.success('Email sent successfully !');
      e.target.reset();
    }).catch((error) => {
      // Show error alert
      console.log("err : " + error);
      toast.error('Failed to send email !');
    });
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Name is required</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                },
                { required: true }
              )}
              type="email"
              placeholder="Email *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              type="text"
              placeholder="Subject *"
            />
            {errors.subject && errors.subject.type === "required" && (
              <span className="invalid-feedback">Subject is required.</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">Submit</span>
              <span className="second">Submit</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
