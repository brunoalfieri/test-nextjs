import { NextRequest, NextResponse } from 'next/server';
import { productDelete } from './delete';
import { productRead } from './read';
import { productUpdate } from './update';

const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;
  return NextResponse.json(await productDelete({ productId }));
};
const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;
  return NextResponse.json(await productRead({ productId }));
};

const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;
  const body = await request.json();
  return NextResponse.json(await productUpdate({ productId, body }));
};
export { DELETE, GET, PUT };
