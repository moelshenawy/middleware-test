import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("https://middleware-test-nu.vercel.app/");
  }

  if (verify && url === "https://middleware-test-nu.vercel.app/") {
    return NextResponse.redirect(
      "https://middleware-test-nu.vercel.app/dashboard"
    );
  }
}
