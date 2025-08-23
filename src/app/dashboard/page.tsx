import FeedbackRow from "../../components/dashboard/FeedbackRow/page";
import LeadsOverview from "../../components/dashboard/LeadsOverview/page";
import DashboardStats from "../../components/dashboard/page";
import QuickActions from "../../components/dashboard/QuickActions/page";

export default function DashboardPage() {
  return (
    <>
      <DashboardStats />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="flex-1">
          <LeadsOverview />
        </div>
        <div className="w-full lg:w-[300px]">
          <QuickActions />
        </div>
      </div>

      <FeedbackRow />
    </>
  );
}
