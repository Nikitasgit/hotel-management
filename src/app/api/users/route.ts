import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextResponse } from "next/server";
import {
  checkReviewExists,
  createReview,
  getUserData,
  updateReview,
} from "@/libs/apis";

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentification Required", { status: 500 });
  }
  const userId = session.user.id;
  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error) {
    return new NextResponse("Unable to fetch", { status: 400 });
  }
}

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Authentification Required", { status: 500 });
  }
  const { roomId, reviewText, ratingValue } = await req.json();
  if (!roomId || !reviewText || !ratingValue) {
    return new NextResponse("Please provide all fields", { status: 400 });
  }
  const userId = session.user.id;

  try {
    //Chek if already exists
    const alreadyExists = await checkReviewExists(userId, roomId);
    let data;
    if (alreadyExists) {
      data = await updateReview({
        reviewId: alreadyExists._id,
        reviewText,
        userRating: ratingValue,
      });
    } else {
      data = await createReview({
        userId,
        reviewText,
        userRating: ratingValue,
        hotelRoomId: roomId,
      });
    }
    return NextResponse.json(data, { status: 200, statusText: "Successful" });
  } catch (error: any) {
    console.log("Error Updating", error);
    return new NextResponse("Unable to create review", { status: 400 });
  }
}
