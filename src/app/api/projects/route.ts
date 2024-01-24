import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export async function GET(request: Request) {
  // Do whatever you want
  return Response.json({ message: 'Hello World' }, { status: 200 });
}
