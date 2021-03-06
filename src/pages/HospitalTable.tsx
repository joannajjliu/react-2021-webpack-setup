import React from 'react';
import FiveColumnsTable from '../organisms/FiveColumnsTable';
import { hospitalStorageData } from '../data/hospitalStorageData';

const tableProps = {
  data: hospitalStorageData,
  colOneTitle: 'Floor',
  colTwoTitle: 'Unit',
  colThreeTitle: 'Category',
  colFourTitle: 'Status',
};
const HospitalTable: React.FC = () => <FiveColumnsTable {...tableProps} />;

export default HospitalTable;
