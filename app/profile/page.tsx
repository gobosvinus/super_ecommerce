import MyProfileForm from "@/components/ProfilePage/MyProfileForm";
import ProfileMenu from "@/components/ProfilePage/ProfileMenu";

export default function Home() {
  return (
    <main className="size-full overflow-x-hidden font-secondary container flex gap-4 pt-60">
      <ProfileMenu />
      <MyProfileForm />
    </main>
  );
}
