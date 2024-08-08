import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/product";
import Gift from "../../../models/gift";

export async function GET(request) {
  try {
    await connectToDatabase();
    const gifts = await Gift.find({});
    return NextResponse.json({ products: gifts });
  } catch (error) {
    return NextResponse.json({ error: error, gifts: [] }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const INCREMENT_BY = 1;
    const { id } = await request.json();
    const gift = await Gift.findOne({ id });
    if (!gift) {
      return NextResponse.json({ error: "gift not found" }, { status: 404 });
    }
    if (Number(gift.locked_quantity) + INCREMENT_BY > gift.available_quantity) {
      return NextResponse.json(
        { error: "Cannot lock more than available quantity" },
        { status: 400 }
      );
    }
    gift.locked_quantity += INCREMENT_BY;
    gift.is_locked = Number(gift.locked_quantity) === gift.available_quantity;
    await gift.save();
    return NextResponse.json({ status: "ok", product: gift });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
