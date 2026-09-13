import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Press, Editorial & General Inquiries | GoldMagazines',
  description: 'Get in touch with the GoldMagazines editorial bureau, submit press releases, syndicate inquiries, or reach out to our team.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
