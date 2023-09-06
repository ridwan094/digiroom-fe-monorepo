import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CustomBreadcrumb() {
  const router = useRouter();
  const { pathname, query } = router;
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (query.slug) {
      setSlug(query.slug.toString());
    } else {
      setSlug('');
    }
  }, [query.slug]);

  const cleanUrl = pathname.replace(/\/\[slug\]/, '');
  const paths = cleanUrl.split('/').filter((crumb) => crumb !== '');

  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="flex justify-end">
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          <Link href={`/${paths.slice(0, index + 1).join('/')}`}>{path.replace(/-/g, ' ')}</Link>
        </Breadcrumb.Item>
      ))}

      {slug && <Breadcrumb.Item>{slug}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}
