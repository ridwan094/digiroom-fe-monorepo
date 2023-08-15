import { Button } from 'flowbite-react';
import DashboardPromo  from './dashboardpromo'

export default function Home() {
  const itemDashboardTest = [
    {
      productName : ['Samsung, Iphone, Huawei, Realme, Xiaomi, ']
    }
  ]
  return (
    <>
      {/* <h1>Welcome to Digiroom CMS</h1>
      <Button color="purple">Create CMS</Button> */}
      <div className='flex flex-row justify-center items-center mt-10'>
          <DashboardPromo/>
      </div>
    </>
  );
}
