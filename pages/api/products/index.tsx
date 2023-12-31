import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products fetched successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      { status: 500 }
    );
  }
};
