import Product from "@/models/product";
import connectToDatabase from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function PATCH(request, context) {
  try {
    await connectToDatabase();
    const INCREMENT_BY = 1;
    const { params: { id } } = context;
    const product = await Product.findOne({ id });
    if (!product) {
      return NextResponse.json({ error: "product not found" }, { status: 404 });
    }
    // Check product quantity
    if (Number(product.locked_quantity) + INCREMENT_BY > product.available_quantity) {
      return NextResponse.json(
        { error: "Cannot lock more than available quantity" },
        { status: 400 }
      );
    }
    product.locked_quantity += INCREMENT_BY;
    product.is_locked = Number(product.locked_quantity) === product.available_quantity;
    await product.save();
    return NextResponse.json({ status: "ok", product });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}