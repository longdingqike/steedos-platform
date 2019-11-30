import { SteedosIDType } from ".";

export type SteedosUserSessionSpace = {
    _id: string,
    name: string
}

export type SteedosUserSessionCompany = {
    _id: string,
    name: string
}

export type SteedosUserSessionOrganization = {
    _id: string,
    name: string,
    fullname: string
}

export type SteedosUserSessionPermissionShares = {
    _id: string,
    object_name: string
}

export type SteedosUserSession = {
    userId: SteedosIDType,
    spaceId: string,
    name: string,
    username?: string,
    mobile?: string,
    email?: string,
    utcOffset?: number,
    roles: string[],
    space: SteedosUserSessionSpace,
    spaces: SteedosUserSessionSpace[],
    company?: SteedosUserSessionCompany,
    companies?: SteedosUserSessionCompany[],
    organization: SteedosUserSessionOrganization,
    organizations: SteedosUserSessionOrganization[],
    permission_shares: SteedosUserSessionPermissionShares[]
}