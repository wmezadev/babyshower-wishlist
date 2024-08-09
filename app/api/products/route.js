import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/product";

export async function GET(request) {
  try {
    await connectToDatabase();
    const product = await Product.find({});
    return NextResponse.json({ products: product });
  } catch (error) {
    return NextResponse.json({ error: error, products: [] }, { status: 500 });
  }
}
