export interface limitUpdateProps {
    name: string;
    align: "right" | "left" | "center" | "justify" | "char" | undefined;
}
export interface LimitBodyPayload {
    id: number;
    report_type: string;
    old: string;
    new: string;
    date: string;
    name: string;
    operator: string;
    ip: string;
}
export const LimitUpdateTableHead: limitUpdateProps[] = [
    {
        name: "SNo.",
        align: "left"
    },
    {
        name: "Report Type",
        align: "right"
    },
    {
        name: "Old Limit",
        align: "right"
    },
    {
        name: "New Limit",
        align: "right"
    },
    {
        name: "Date Time",
        align: "left"
    },
    {
        name: "User Name",
        align: "left"
    },
    {
        name: "Operator",
        align: "left"
    },
    {
        name: "IP Address",
        align: "left"
    },
]

export const ShareUpdateTableHead: limitUpdateProps[] = [
    {
        name: "SNo.",
        align: "left"
    },
    {
        name: "Report Type",
        align: "right"
    },
    {
        name: "Old Share %",
        align: "right"
    },
    {
        name: "New Share %",
        align: "right"
    },
    {
        name: "Date Time",
        align: "left"
    },
    {
        name: "User Name",
        align: "left"
    },
    {
        name: "Operator",
        align: "left"
    },
    {
        name: "IP Address",
        align: "left"
    },
]
export const StatusUpdateTableHead: limitUpdateProps[] = [
    {
        name: "SNo.",
        align: "left"
    },
    {
        name: "Report Type",
        align: "right"
    },
    {
        name: "Old Status",
        align: "right"
    },
    {
        name: "New Status",
        align: "right"
    },
    {
        name: "Date Time",
        align: "left"
    },
    {
        name: "User Name",
        align: "left"
    },
    {
        name: "Operator",
        align: "left"
    },
    {
        name: "IP Address",
        align: "left"
    },
]

export const commUpdateTableHead: limitUpdateProps[] = [
    {
        name: "SNo.",
        align: "left"
    },
    {
        name: "Report Type",
        align: "right"
    },
    {
        name: "Old Comm",
        align: "right"
    },
    {
        name: "New Comm",
        align: "right"
    },
    {
        name: "Date Time",
        align: "left"
    },
    {
        name: "User Name",
        align: "left"
    },
    {
        name: "Operator",
        align: "left"
    },
    {
        name: "IP Address",
        align: "left"
    },
]



export const LimitUpdateTableBody: LimitBodyPayload[] = [
    {
        id: 1,
        report_type: "Limit",
        old: "0",
        new: "8000",
        date: "2024-05-27 10:49:54",
        name: "SA16499",
        operator: "MA1568",
        ip: "2409:40e5:9:ab24:7568:510b:57f4:dda5",
    },
]
export const ShareUpdateTableBody: LimitBodyPayload[] = [
    {
        id: 1,
        report_type: "Share",
        old: "10",
        new: "80",
        date: "2024-05-29 13:02:41",
        name: "SA16499",
        operator: "Raj",
        ip: "	2409:40e5:9:ab24:7568:510b:57f4:dda5",
    },
]
export const commUpdateTableBody: LimitBodyPayload[] = [
    {
        id: 1,
        report_type: "Comm",
        old: "1",
        new: "2",
        date: "2024-05-29 13:02:41",
        name: "SA16499",
        operator: "Raj",
        ip: "	2409:40e5:9:ab24:7568:510b:57f4:dda5",
    },
]
export const statusUpdateTableBody: LimitBodyPayload[] = [
    {
        id: 1,
        report_type: "Status",
        old: "Active",
        new: "Inactive",
        date: "2024-05-29 13:02:41",
        name: "SA16499",
        operator: "Raj",
        ip: "	2409:40e5:9:ab24:7568:510b:57f4:dda5",
    },
]