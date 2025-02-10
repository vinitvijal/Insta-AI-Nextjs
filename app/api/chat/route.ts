import { streamText } from "ai"
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  compatibility: 'strict',
  apiKey: process.env.OPENAI_API_KEY,
});


export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()
//   console.log(messages)
  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
  })
  console.log(result)
  return result.toDataStreamResponse()
}

