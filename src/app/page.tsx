import MyAccordion from "@/components/accordion";
import MyAlert from "@/components/alert";
import MyAlertDialog from "@/components/alert-dialog";
import MyAspectRatio from "@/components/aspect-ratio";
import MyAvatar from "@/components/avatar";
import MyBadge from "@/components/badge";
import MyBreadcrumb from "@/components/breadcrumb";
import MyButton from "@/components/button";
import MyCalendar from "@/components/calendar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 gap-10">
      <MyAccordion />
      <MyAlert />
      <MyAlertDialog />
      <MyAspectRatio />
      <MyAvatar />
      <MyBadge />
      <MyBreadcrumb />
      <MyButton />
      <MyCalendar />
    </main>
  );
}
