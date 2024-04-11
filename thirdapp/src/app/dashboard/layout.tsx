import React from 'react';

const Layout = ({ children, users, revenue, notifications,login }: { children: React.ReactNode, users: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode,login : React.ReactNode }) => {
  const isLoggedin=true;
  return isLoggedin ? (
    <>
      <div>
        {children}
      </div>      
         <div className='flex'>
        <div className='flex flex-col'>
          <div>
            {users}
          </div>
          <div>
            {revenue}
          </div>
        </div>
          <div className='flex-1'>{notifications}</div>
      </div>
            
    </>
  ):( 
    <div>
      {login}
    </div>
  );
};

export default Layout;
