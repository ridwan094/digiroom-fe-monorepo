import Table from '@/components/Table';
import { columns } from '@/constants/implement-table';

export default function implementTable() {
  const itemProduct = [
    {
      title: 'Promo Yaris',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
  ];

  return (
    <div className="pt-5">
      <Table
        columns={columns((value) => console.log(value))}
        dataSource={itemProduct}
        pagination={{
          currentPage: 1,
          totalPages: 5,
          onPageChange: (page) => console.log(page),
          onselect: (value) => console.log('value', value),
        }}
      />
    </div>
  );
}
