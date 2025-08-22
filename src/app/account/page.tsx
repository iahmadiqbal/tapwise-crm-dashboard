import CompanyInformation from "../../components/account/CompanyInformation/page";
import NotificationPreferences from "../../components/account/NotificationPreferences/page";
import ProfileInformation from "../../components/account/ProfileInformation/page";
import SecuritySettings from "../../components/account/SecuritySettings/page";

export default function AccountPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Account</h1>
      <ProfileInformation />
      <CompanyInformation />
      <SecuritySettings />
      <NotificationPreferences />
    </>
  );
}
