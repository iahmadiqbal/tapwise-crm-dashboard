import AvailablePlans from "../../components/subscription/availablePlans/page";
import BillingHistory from "../../components/subscription/BillingHistory/page";
import CurrentPlanBox from "../../components/subscription/CurrentPlanBox/page";
import StatCards from "../../components/subscription/StatCards/page";

export default function SubscriptionPage() {
  return (
    <>
      <CurrentPlanBox />
      <StatCards />
      <AvailablePlans />
      <BillingHistory />
    </>
  );
}
