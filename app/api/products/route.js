import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/product";

export async function GET(request) {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    // Create and return the response with headers to prevent caching
    const response = NextResponse.json({ products, timestamp: new Date().toISOString() });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    response.headers.set('Surrogate-Control', 'no-store'); 
    return response;
  } catch (error) {
    // Create and return the error response with headers to prevent caching
    const errorResponse = NextResponse.json({ error: error.message, products: [], timestamp: new Date().toISOString() }, { status: 500 });
    errorResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    errorResponse.headers.set('Surrogate-Control', 'no-store');
    return errorResponse;
  }
}