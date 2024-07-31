import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

export const LinkSaveSchema = z.object({
  linkCategory: z.string().min(3, {
    message: 'Link must be 3 characters long',
  }),
  linkUrl: z.string().min(5, {
    message: 'Link URL must be 5 characters long',
  }),
  linkProject: z.string().min(5, {
    message: 'Link project must be 5 characters long',
  }),
});
