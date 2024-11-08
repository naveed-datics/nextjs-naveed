// app/api/products/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

console.log("Prisma Product Model: ", prisma.product);


export async function POST(request) {
  try {
    const data = await request.json();
    const newProduct = await prisma.product.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published || false,
        price: data.price ,
      },
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ success: false, error: 'Failed to add product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
