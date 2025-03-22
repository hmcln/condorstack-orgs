import { type PropsWithChildren } from 'react'
import { SyncActiveOrganization } from "../utils/sync-active-organization"

export default function OrganizationLayout(props: PropsWithChildren) {
    return (
        <>
            <SyncActiveOrganization />
            {props.children}
        </>
    )
}
