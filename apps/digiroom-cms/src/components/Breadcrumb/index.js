import { Breadcrumb } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CustomBreadCumb() {
  const router = useRouter();

  const { asPath } = router;

  const paths = asPath.split('/').filter((path) => path);

  return (
    <Breadcrumb aria-label="Default breadcrumb example" className='flex justify-end'>
      <Breadcrumb.Item>
          Dashboard
      </Breadcrumb.Item>
      {paths.map((path, index) => (
            <Breadcrumb.Item key={index}>
                <Link href={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
            </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}


