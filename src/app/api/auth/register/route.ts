import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, nic, email, password } = body;

    if (!fullName || !nic || !email || !password) {
      return NextResponse.json(
        { error: "All registration fields (Full Name, NIC, Email, Password) are required." },
        { status: 400 }
      );
    }

    try {
      const user = registerUser({
        name: fullName,
        nic,
        email,
        password,
      });

      return NextResponse.json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (dbErr: any) {
      return NextResponse.json(
        { error: dbErr.message || "Registration failed." },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 500 }
    );
  }
}
