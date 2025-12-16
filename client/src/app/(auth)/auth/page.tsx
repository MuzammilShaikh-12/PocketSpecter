import type { Metadata } from "next";

import { Scale } from "lucide-react";
import Link from "next/link";
import { GoogleLoginButton } from "@/components/google-button";

export const metadata: Metadata = {
  title: "Sign In - LegalEase",
  description: "Sign in to LegalEase with your Google account",
};

export default function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      {/* Left side - Branding */}
      <div className='flex-1 bg-primary p-8 lg:p-12 flex flex-col justify-between text-primary-foreground'>
        <div>
          <div className='flex items-center gap-3 mb-12'>
            <div className='bg-primary-foreground/10 p-2.5 rounded-lg backdrop-blur-sm'>
              <Scale className='w-7 h-7' />
            </div>
            <span className='text-2xl font-semibold tracking-tight'>
              LegalEase
            </span>
          </div>

          <div className='max-w-md'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance'>
              Your legal workflows, simplified
            </h1>
            <p className='text-lg text-primary-foreground/80 leading-relaxed text-pretty'>
              Streamline your legal practice with intelligent document
              management, secure client portals, and automated workflows
              designed for modern law firms.
            </p>
          </div>
        </div>

        <div className='space-y-6 max-w-md'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm'>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold mb-1'>Bank-level security</h3>
              <p className='text-sm text-primary-foreground/70'>
                Your data is encrypted and protected with enterprise-grade
                security standards.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm'>
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold mb-1'>Lightning fast</h3>
              <p className='text-sm text-primary-foreground/70'>
                Access your documents and case files instantly from any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className='flex-1 flex items-center justify-center p-8 lg:p-12 bg-background'>
        <div className='w-full max-w-md'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold mb-3 text-foreground'>
              Welcome back
            </h2>
            <p className='text-muted-foreground leading-relaxed'>
              Sign in to your account to continue managing your legal workflows
            </p>
          </div>

          <GoogleLoginButton />

          <div className='mt-8 text-center text-sm text-muted-foreground'>
            <p>
              By continuing, you agree to our{" "}
              <Link
                href='#'
                className='text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors'
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href='#'
                className='text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors'
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className='mt-12 pt-8 border-t border-border'>
            <p className='text-sm text-muted-foreground text-center'>
              Need help?{" "}
              <Link
                href='#'
                className='text-foreground font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors'
              >
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
