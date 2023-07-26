import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Layout } from "@/components/layout";
import {Main}from '@/components/main'

export default function Home() {
  return (
    <Layout>
      <Main></Main>
    </Layout>
  )
}
