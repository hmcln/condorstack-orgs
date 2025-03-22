import { OrganizationList } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OrgSelectionPage() {
    const { orgId } = await auth();

    // Once the `orgId` is set, redirect the user. In example the user will be redirected to `/dashboard`
    if (orgId) {
        redirect("/dashboard");
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <OrganizationList hidePersonal />
            </div>
        </div>
    );
}
