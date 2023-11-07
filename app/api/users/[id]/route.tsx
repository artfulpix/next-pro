import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: +params.id },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: +params.id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    data: { name: validation.data.name, email: validation.data.email },
    where: { id: user.id },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({ where: { id: +params.id } });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  const deletedUser = await prisma.user.delete({ where: { id: +params.id } });
  return NextResponse.json(deletedUser);
}
