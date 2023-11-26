import Breadcrumb from '../components/Breadcrumb';
import TableMenu from '../components/TableMenu';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Brand" />
    
      <div className="flex flex-col gap-10">
        <TableMenu />
      </div>
    </>
  );
};

export default Tables;
