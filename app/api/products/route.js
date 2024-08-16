import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/product";

export async function GET(request) {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    // Create and return the response with headers to prevent caching
    const response = NextResponse.json({ products });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Expires', '0');
    response.headers.set('Pragma', 'no-cache');
    return response;
  } catch (error) {
    // Create and return the error response with headers to prevent caching
    const errorResponse = NextResponse.json({ error: error.message, products: [] }, { status: 500 });
    errorResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    errorResponse.headers.set('Expires', '0');
    errorResponse.headers.set('Pragma', 'no-cache');
    return errorResponse;
  }
}