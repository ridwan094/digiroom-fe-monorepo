import {SearchBar} from 'ui';
import {Navbar} from 'ui';
import {Layout} from 'ui';
import { useSelector } from 'react-redux';

export default function Home() {
  const { searchValue } = useSelector((state) => state.example);

  return (
    <main className={`flex min-h-screen flex-col`}>
      <Layout>
        <div className="flex flex-1 items-center justify-center text-center h-full">
          <div className=" text-8xl my-auto">{searchValue ? searchValue : 'The Boilerplate'}</div>
        </div>
      </Layout>
    </main>
  );
}
