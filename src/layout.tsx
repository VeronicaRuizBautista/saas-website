import type React from "react"
import "./styles/index.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Outlet, useNavigate, Link, useLoaderData } from 'react-router-dom';

export default function RootLayout() {
  return (
      <div className={`min-h-screen flex flex-col`}>
          <Navbar />
          <main className="flex-grow"><Outlet /></main>
          <Footer />
      </div>
  )
}

import "./styles/index.css"