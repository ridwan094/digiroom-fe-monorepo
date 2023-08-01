import { useSelector } from 'react-redux';
import { Button } from 'ui/components/atoms';
// import * as Atoms from 'ui';
// import * as Molecules from 'ui';
// import * as Organisms from 'ui';
// import * as Templates from 'ui';
import Layout from 'ui/components/templates/Layout';

export default function Home() {
  const { searchValue } = useSelector((state) => state.example);

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" text-8xl my-auto font-bold text-slate-900">
            {searchValue ? searchValue : 'The Boilerplate'}
          </div>
          <Button>Test</Button>
        </div>
        {/* <Templates.Button>clik me</Templates.Button>
          <Button>Login</Button> */}
      </Layout>
    </>
  );
}
