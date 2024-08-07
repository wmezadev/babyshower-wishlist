import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(request) {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    return NextResponse.json({
      products,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", products: [] },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { id, is_locked } = await request.json();
    const [result] = await pool.query(
      "UPDATE products SET is_locked = ? WHERE id = ?",
      [is_locked, id]
    );
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          error: "Product not found",
        },
        { status: 404 }
      );
    } else {
      return NextResponse.json({
        status: "ok",
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error updating product"
      },
      { status: 500 }
    );
  }
}
