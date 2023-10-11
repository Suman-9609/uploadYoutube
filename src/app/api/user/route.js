import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            user: "Ajay Barman",
            phone: "85654",
        },
        {
            user: "Jaynta Haldar",
            phone: "6523",
        },
        {
            user: "Haradhan Biswas ",
            phone: "3625",
        }
    ];

    return NextResponse.json(users)

}