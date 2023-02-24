import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("https://middleware-test-nu.vercel.app/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect(
      "https://middleware-test-eight.vercel.app/dashboard"
    );
  }
}
