import Layout from 'ui/components/templates/Layout';
import { BreadCrumbs } from 'ui/components/molecules';
import { ListArtikel } from 'ui/components/organism';

export default function Home() {
  return (
    <div className="relative">
      <Layout>
        <div className="hidden md:block px-4 border-b border-gray-100 py-1 mb-4">
          <div className="container mx-auto p-4">
            <BreadCrumbs />
          </div>
        </div>
        <div className="container mx-auto">
          {/* List Artikel Desktop */}
          <div className="hidden md:block">
            <ListArtikel />
          </div>
        </div>
      </Layout>
    </div>
  );
}
