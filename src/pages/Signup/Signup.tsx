import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/hooks/auth/useLogin';
import { useRegister } from '@/hooks/user/useRegister';
import { ROUTES } from '@/pages/routes';

import styles from './Signup.module.scss';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const Signup: React.FC = () => {
  const { mutate: register, isPending } = useRegister();
  const { mutate: login } = useLogin();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleRegister = (values: z.infer<typeof formSchema>) => {
    register(values, {
      onSuccess: () => {
        login(values);
      },
    });
  };

  const handleNavigateToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.header}>
        <Typography variant="extra-large-600" className={styles.text}>
          Get started with CitySpot
        </Typography>
      </div>
      <Form {...form}>
        <div className={styles.body}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. name@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel variant="required">Password</FormLabel>
                  <FormControl>
                    <Input variant="masked" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="expandIcon"
              className="w-full"
              Icon={ArrowRight}
              iconPlacement="right"
              iconSize={16}
              disabled={isPending}
            >
              {isPending ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </div>
      </Form>
      <div className={styles.footer}>
        <Typography variant="small-medium-400" className={styles.caption}>
          Already have an account?
        </Typography>
        <Button
          variant="link"
          className={styles.footerButton}
          onClick={handleNavigateToLogin}
        >
          <Typography variant="small-medium-400" className={styles.text}>
            Sign in
          </Typography>
        </Button>
      </div>
    </div>
  );
};
