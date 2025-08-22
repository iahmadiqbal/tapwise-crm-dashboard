import FeedbackRow from "../../components/dashboard/FeedbackRow/page";
import LeadsOverview from "../../components/dashboard/LeadsOverview/page";
import DashboardStats from "../../components/dashboard/page";
import QuickActions from "../../components/dashboard/QuickActions/page";

export default function DashboardPage() {
  return (
    <>
      <DashboardStats />
      <LeadsOverview />
      <QuickActions />
      <FeedbackRow />
    </>
  );
}
