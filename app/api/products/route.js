import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/product";

export async function GET(request) {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: error, products: [] },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { id, is_locked } = await request.json();
    await connectToDatabase();
    const result = await Product.findOneAndUpdate(
      { id },
      { is_locked },
      { new: true }
    );
    if (!result) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json({ status: "ok" });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating product" },
      { status: 500 }
    );
  }
}