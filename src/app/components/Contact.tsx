import React from 'react';
import Title from './Title';
import { Button } from '.';
import { Location, Mobile, Sms, Whatsapp } from 'iconsax-react';
import {
  Control,
  UseControllerProps,
  useController,
  useForm,
} from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';

const schema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'email is required' })
    .email('This is not a valid email'),
  number: z.string({ invalid_type_error: 'Number should be a valid number' }),
  message: z
    .string({ required_error: 'message is required' })
    .min(5, { message: 'Please, write valid message.' }),
});

type ContactFormSchema = z.infer<typeof schema>;

type TextInputProps = {
  labelClassName?: string;
  className?: string;
  label: string;
} & UseControllerProps<ContactFormSchema> &
  React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  label,
  labelClassName,
  className,
  ...rest
}: TextInputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(rest);

  return (
    <div className={`relative`}>
      <input
        {...field}
        className={twMerge(
          `peer w-full text-white/70 bg-transparent text-sm font-medium border focus:outline-none px-3 py-3 ${
            error
              ? 'border-red-500/50'
              : 'border-secondary/50 focus:border-primary'
          }`,
          className
        )}
      />
      <label
        htmlFor=""
        className={twMerge(
          `absolute text-xs left-2 top-1/2 -translate-y-1/2 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200 ${
            field.value ? 'top-0' : 'peer-focus:top-0'
          }`,
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
};

const formObjects: any = [
  {
    label: '*Name',
    name: 'name',
    className: '',
  },
  {
    label: '*Email',
    name: 'email',
    className: '',
  },
  {
    label: '*Number',
    name: 'number',
    className: '',
  },
];

const Contact = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
  };

  const buildForm = formObjects.map((form: any, idx: number) => (
    <TextInput
      key={`form_${idx}`}
      name={form.name}
      label={form.label}
      {...form}
      control={control}
    />
  ));

  return (
    <div className="mt-20 md:mt-0">
      <Title title="Get in Touch" />
      <div className="mt-10 md:mt-[4.5rem] 2xl:mt-20 lg:flex items-center gap-10">
        <div className="lg:w-2/3 space-y-5">
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Mobile />
            </div>
            <div className="text-secondary">
              <h2 className="font-bold">Phone</h2>
              <div className="flex-1 text-xs font-medium">
                <a href="tel:+8801758681702">
                  01758681702 (
                  <Whatsapp className="text-green-500 inline-block" size={18} />
                  )
                </a>
              </div>
              <div className="text-xs font-medium">
                <a href="tel:+8801936445525">01936445525</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Sms />
            </div>
            <div className="flex-1 text-secondary">
              <h2 className="font-bold">Email</h2>
              <div className="text-xs font-medium">
                <a href="mailto:chat@jifakir.xyz">chat@jifakir.xyz</a>
              </div>
              <div className="text-xs font-medium">
                <a href="mailto:jifakir@outlook.com">jifakir02@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-white/5 px-5 py-3 rounded-lg">
            <div className="w-20 h-20 rounded-lg border-primary/40 text-primary text-4xl border shadow-sm shadow-primary bg-white/5 backdrop-blur-xl flex justify-center items-center">
              <Location />
            </div>
            <div className="flex-1 text-secondary">
              <h2 className="font-bold">Address</h2>
              <div className="text-xs font-medium">
                <a
                  href="https://maps.app.goo.gl/1k4ND2tpLhP7xF889"
                  target="_blank"
                >
                  West Rajoir, Rayenda, Sharankhola, Bagerhat-9330
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 lg:mt-auto">
          <h2 className="text-lg font-bold text-white mb-2">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {buildForm}
            <div className="relative">
              <textarea
                {...register('message')}
                className="peer h-24 w-full text-white/70 bg-transparent text-sm font-medium border border-secondary/50 focus:border-primary focus:outline-none px-3 py-3"
              />
              <label
                htmlFor=""
                className="absolute text-xs left-2 top-4 -translate-y-1/2 peer-focus:top-0 text-white/70 font-medium bg-dark px-1.5 transition-all duration-200"
              >
                *Message
              </label>
            </div>
            <Button>Send</Button>
          </form>
        </div>
      </div>
      <footer className="pt-10 md:hidden pb-3 text-center">
        <div className=" flex justify-center items-center gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jifakir"
            className="w-6 h-6 text-xs rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-center"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
