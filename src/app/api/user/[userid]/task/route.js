import { usersTask } from "@/app/model/TaskModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectDB } from "@/app/Helper/db";

export const GET = async (_, { params }) => {
  try {
    await ConnectDB();

    const tasks = await usersTask.find({
      UserId: new mongoose.Types.ObjectId(params.userId),
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Server Error" },
      { status: 500 }
    );
  }
};
