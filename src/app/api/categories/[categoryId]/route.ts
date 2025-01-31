import { NextRequest, NextResponse } from 'next/server';
import { categoryDelete } from './delete';
import { categoryUpdate } from './update';

const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ categoryId: string }> }
) => {
  const { categoryId } = await params;
  return NextResponse.json(
    await categoryDelete({ categoryId: Number(categoryId) })
  );
};
const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ categoryId: string }> }
) => {
  const { categoryId } = await params;

  const body = await request.json();
  return NextResponse.json(
    await categoryUpdate({ body, categoryId: Number(categoryId) })
  );
};
export { DELETE, PUT };
