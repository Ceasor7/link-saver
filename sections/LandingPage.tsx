'use client';

import CardWrapper from '@/components/card-wrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      router.replace('/link-save');
    }
  }, [sessionStatus, router]);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        setError('Invalid email or password');
      } else if (res?.url) {
        router.replace('/dashboard');
      } else {
        setError('');
      }
    } catch (error) {
      setError('Error, try again');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const { pending } = useFormStatus();

  if (sessionStatus === 'loading') {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== 'authenticated' && (
      <CardWrapper
        label="Login to your account"
        title="Login"
        backButtonHref="/register"
        backButtonLabel="Don't have an account? Register here."
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={pending || loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    )
  );
};

export default LoginForm;
