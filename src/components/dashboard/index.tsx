import { serviceData } from '@/pages/api/services';
import DashboardHeader from '../dashboardHeader';

type PageProps = {
  data: serviceData[];
};

export default function Dashboard({ data }: PageProps) {
  return (
    <main>
      <DashboardHeader />
    </main>
  );
}
